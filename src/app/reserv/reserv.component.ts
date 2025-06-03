import { Component, ElementRef, OnInit, EventEmitter} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { InstitutionComponent } from './institution/institution.component';
import { ApiClientService } from '../services/api-client.service';
import { InstitutionDto } from './institution/dto/institution.dto';
import { get } from 'http';
import { AppointmentDto } from './dto/appointment.interface';
import { SpecialtiesComponent } from './specialties/specialties.component';
import { SpecialtiesDto } from './specialties/interfaces/specialties';
import { DoctorDto } from './doctor/interfaces/doctor';
import { DoctorComponent } from './doctor/doctor.component';
import { ScheduleDto } from './schedule/interfaces/schedule';
import { AuthService } from '../services/auth.service';
import { LoggedUserInterface } from '../login/interfaces/logged-user.interface';
import { ScheduleComponent } from './schedule/schedule.component';
import { DoctorService } from '../services/doctor.service';
import { HealthInstitutionService } from '../services/health-institution.service';
import { GetDoctorsBySpecialtyInstutionDepartmentAndCi } from '../services/interfaces/getDoctorsBy.interface';
import { SpecialtiesService } from '../services/specialties.service';
@Component({
  selector: 'app-reserv',
  imports: [ InstitutionComponent,SpecialtiesComponent,DoctorComponent,ScheduleComponent],
  templateUrl: './reserv.component.html',
  styleUrl: './reserv.component.scss'
})
export class ReservComponent implements OnInit {
  constructor(private apiClient: ApiClientService, private titleService: Title,
    private authService: AuthService, private doctorService: DoctorService, private healthInstitutionService: HealthInstitutionService,
    private specialtiesService: SpecialtiesService
  ) {
    this.titleService.setTitle('Reservar');
  }
  loginUser!: LoggedUserInterface;
  showInstitutions: boolean = false;
  showSpecialities: boolean = false;
  showDoctors: boolean = false;
  showSchedules: boolean = false;
  data:any;
  institutions: InstitutionDto[] = [];
  specialities: SpecialtiesDto[] = [];
  doctors: DoctorDto[] = [];
  schedules: ScheduleDto[] = [];
  appointmentData: AppointmentDto = {
    patientCi: 0,
    doctorCi: 0,
    specialty: '',
    date: undefined,
    institutionName: '',
    department: '',
    shift: '',
    startTime: ''
  }
  departamentos: string[] = [
    'Cochabamba', 'Santa Cruz', 'La Paz', 'Oruro', 'Potosi', 'Tarija', 'Beni', 'Pando', 'Chuquisaca'
  ];
  ngOnInit(): void {
    this.loginUser = this.authService.getLoggedUser();
    this.appointmentData.patientCi = this.loginUser.userCi;
  }
  resetData(appointment:boolean){
    if(appointment) {
      this.appointmentData.institutionName = '';
      this.appointmentData.department = '';
      this.appointmentData.specialty = '';
      this.appointmentData.doctorCi = 0;
      this.appointmentData.shift = '';
      this.appointmentData.startTime = '';
      this.appointmentData.date = undefined;
    }
    this.institutions = [];
    this.specialities = [];
    this.doctors = [];
    this.showInstitutions = false;
    this.showSpecialities = false;
    this.showDoctors = false;
  }
  getInstitutions() {
    let newData: InstitutionDto[] = [];
    this.apiClient.get('health-institucion').subscribe({
      next: (data: any) => {
        newData = data.data.map((institution: any) => ({
          uuid: institution.institution_uuid,
          name: institution.province_name
        }));
        this.institutions = newData;
      },
      error: (error: any) => {
        console.error('Error fetching institutions:', error);
      }
    })
  }
  getInstitutionsByDepartment(department: string) {
    this.resetData(true);
    this.appointmentData.department =department ?? '';
    this.showSpecialities = false;
    this.healthInstitutionService.getInstitutionsByDepartment({
      department: department.toLowerCase()
    }).subscribe({
      next: (data: any) => {
        if(data){
          this.institutions = data;
          this.showInstitutions = true;
        }else{
          this.showInstitutions = false;
        }
      },
      error: (error: any) => {
        this.showInstitutions = true;
        console.error('Error fetching institutions by department:', error);
      }
    });
  }
  getSpecialitiesBy(institutionName: string, department: string) {
    this.appointmentData.institutionName = institutionName;
    this.resetData(false);
    this.specialtiesService.getSpecialtiesByInstitutionAndDepartment({
      institutionName: institutionName.toLowerCase(),
      department: department.toLowerCase()
    }).subscribe({
      next: (data: SpecialtiesDto[]) => {
        this.specialities = data;
        this.showSpecialities = true;
      },
      error: (error: any) => {
        console.error('Error fetching specialities:', error);
      }
    });
  }
  getDoctorsBy(speciality: string) {
    this.resetData(false);
    let info:GetDoctorsBySpecialtyInstutionDepartmentAndCi;
    info = {
      specialty: speciality,
      institutionName: this.appointmentData.institutionName,
      department: this.appointmentData.department.toLowerCase()
    }
    this.appointmentData.specialty = speciality;
    this.doctorService.getDoctorsBySpecialtyInstutionDepartmentAndCi(info).subscribe({
      next: (data: any) => {
        console.log(data);
        this.doctors = data.data;
        this.showDoctors = true;
      },
      error: (error: any) => {
        console.error('Error fetching doctors:', error);
      }
    });
  }
  getSchedulesBy() {
    this.doctorService.getScheduleByDoctorInstitutionDepartmentAndSpecialty({
      doctorCi: this.appointmentData.doctorCi,
      institutionName: this.appointmentData.institutionName.toLowerCase(),
      department: this.appointmentData.department.toLowerCase(),
      specialty: this.appointmentData.specialty.toLowerCase()
    }).subscribe({
      next: (data: any) => {
        this.schedules = data;
        this.showSchedules = true;
      },
      error: (error: any) => {
        console.error('Error fetching schedules:', error);
      }
    });
  }
  nextStep(institution: InstitutionDto) {
    this.resetData(false);
    this.showInstitutions = false;
    this.specialities = [];
    this.getSpecialitiesBy(institution.name ?? '', institution.department ?? '');
    this.appointmentData.institutionName = institution.name ?? '';
    this.showSpecialities = true;
  }
  nextStep2(specialty: SpecialtiesDto) {
    this.resetData(false);
    this.appointmentData.specialty = specialty.name ?? '';
    this.showSpecialities = false;
    this.getDoctorsBy(specialty.name ?? '');
    this.showDoctors = true;
  }
  nextStep3(doctor: DoctorDto) {
    this.resetData(false);
    this.appointmentData.doctorCi = doctor.ci;
    this.showDoctors = false;
    this.getSchedulesBy();
    this.showSchedules = true;
    console.log(this.appointmentData);
  }
  nextStep4(schedule: ScheduleDto) {
    this.resetData(false);
    this.appointmentData.shift = schedule.shift;
    this.appointmentData.date = schedule.shiftDate;
    this.appointmentData.startTime = schedule.startTime;
    this.apiClient.post('patient/reserv-appointment', this.appointmentData).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (error: any) => {
        console.error('Error fetching schedules:', error);
      }
    });
  }
  prevStep() {
    this.showSpecialities = false;
    this.showInstitutions = true;
  }
}
