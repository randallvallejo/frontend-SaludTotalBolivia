import { Injectable } from '@angular/core';
import { DoctorDto } from '../reserv/doctor/interfaces/doctor';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GetDoctorsBySpecialtyInstutionDepartmentAndCi } from './interfaces/getDoctorsBy.interface';
import { environment } from '../../environments/environment';
import { GetScheduleByDoctorInstitutionDepartment } from './interfaces/getScheduleBy.interface';
import { map } from 'rxjs/operators';
import { ScheduleDto } from '../reserv/schedule/interfaces/schedule';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }
  getDoctorsBySpecialtyInstutionDepartmentAndCi(info:GetDoctorsBySpecialtyInstutionDepartmentAndCi): Observable<DoctorDto[]> {
    console.log(info);
    return this.http.get<DoctorDto[]>(environment.API_BASE_URL +`/health-institucion/doctors/${info.institutionName}/${info.department}/${info.specialty}`);
  }
  private getScheduleByDoctorInstitutionDepartmentAndSpecialtyPrimitive(info:GetScheduleByDoctorInstitutionDepartment): Observable<any> {
    return this.http.get(environment.API_BASE_URL + `/health-institucion/doctor/schedules/${info.doctorCi}/${info.institutionName}/${info.department}/${info.specialty}`);
  }
  transformToScheduleDto(data: any): ScheduleDto[] {
    let schedules: ScheduleDto[] = [];
    data.forEach((schedule: any) => {
      schedules.push({
        id: schedule.schedule_id,
        shift: schedule.shift_name,
        shiftDate: schedule.shift_date,
        startTime: schedule.start_time,
        endTime: schedule.end_time,
        medicalService: schedule.medical_service
      });
    });
    return schedules;
  }
  getScheduleByDoctorInstitutionDepartmentAndSpecialty(info:GetScheduleByDoctorInstitutionDepartment): Observable<ScheduleDto[]> {
    return this.getScheduleByDoctorInstitutionDepartmentAndSpecialtyPrimitive(info).pipe(
      map((response: any) => {
        let schedules: ScheduleDto[] = [];
        schedules = this.transformToScheduleDto(response.data);
        return schedules;
      })
    );
  }
}
