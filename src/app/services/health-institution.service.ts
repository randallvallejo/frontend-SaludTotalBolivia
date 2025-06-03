import { Injectable } from '@angular/core';
import { getInstitutionsByDepartment } from './interfaces/getInstitution.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { InstitutionDto } from '../reserv/institution/dto/institution.dto';
import { map } from 'rxjs/operators';
import { response } from 'express';
@Injectable({
  providedIn: 'root'
})
export class HealthInstitutionService {

  constructor(private http: HttpClient) { }
  getInstitutionsByDepartmentPrimitive(data: getInstitutionsByDepartment): Observable<any> {
    return this.http.get(`${environment.API_BASE_URL}/health-institucion/department/${data.department}`);
  }
  transformToInstitutionDto(data: any): InstitutionDto[] {
    let institutions: InstitutionDto[] = [];
    data.forEach((institution: any) => (
      institutions.push({
      uuid: institution.institution_uuid,
      name: institution.institution_name,
      department: institution.department_name,
      province: institution.province_name
    })));
    return institutions;
  }
  getInstitutionsByDepartment(data: getInstitutionsByDepartment): Observable<InstitutionDto[]> {
    return this.getInstitutionsByDepartmentPrimitive(data).pipe(
      map((response: any) => {
        let institutions: InstitutionDto[] = [];
        institutions=this.transformToInstitutionDto(response.data.institutions);
        return institutions;
      })
    );
  }
}
