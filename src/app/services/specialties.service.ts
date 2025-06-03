import { Injectable } from '@angular/core';
import { SpecialtiesDto } from '../reserv/specialties/interfaces/specialties';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { GetSpecialtiesByInstitutionAndDepartment } from './interfaces/getSpecialties.interface';
@Injectable({
  providedIn: 'root'
})
export class SpecialtiesService {

  constructor( private http: HttpClient) { }
  transformToSpecialtiesDto(data: any): SpecialtiesDto[] {
    let specialties: SpecialtiesDto[] = [];
    data.forEach((specialty: any) => (
      specialties.push({
        name: specialty.speciality_name
      })
    ));
    return specialties;
  }
  private getSpecialtiesByInstitutionAndDepartmentPrimitive(info: GetSpecialtiesByInstitutionAndDepartment): Observable<any> {
    return this.http.get(`${environment.API_BASE_URL}/health-institucion/specialties/${info.institutionName}/${info.department}`);
  }
  getSpecialtiesByInstitutionAndDepartment(info: GetSpecialtiesByInstitutionAndDepartment): Observable<SpecialtiesDto[]> {
    return this.getSpecialtiesByInstitutionAndDepartmentPrimitive(info).pipe(
      map((data: any) =>{
        let specialties: SpecialtiesDto[] = [];
        specialties = this.transformToSpecialtiesDto(data.data);
        return specialties;
      })
    );
  }
}
