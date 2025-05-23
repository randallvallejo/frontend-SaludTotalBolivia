import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import e from 'express';
@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  private baseUrl = environment.API_BASE_URL;
  constructor(private client: HttpClient) { }
  get(url: string): Observable<any> {
    return this.client.get(`${this.baseUrl}/${url}`);
  }
  post(url: string, body: any): Observable<any> {
    return this.client.post(`${this.baseUrl}/${url}`, body);
  }
  put(url: string, body: any): Observable<any> {
    return this.client.put(`${this.baseUrl}/${url}`, body);
  }
  delete(url: string): Observable<any> {
    return this.client.delete(`${this.baseUrl}/${url}`);
  }
  patch(url: string, body: any): Observable<any> {
    return this.client.patch(`${this.baseUrl}/${url}`, body);
  }
}
