import { Injectable } from '@angular/core';
import { jwtDecode} from 'jwt-decode';
import { LoggedUserInterface } from '../login/interfaces/logged-user.interface';
import { JwtPayloadInterface } from './interfaces/jwt-payload';
import { Router } from '@angular/router';
import { ApiClientService } from './api-client.service';
import { LoginUserInterface } from '../login/interfaces/login-user.interface';
import { StorageService } from './storage.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private apiClient: ApiClientService,
    private storageService: StorageService
  ) { }
  getLoggedUser(): LoggedUserInterface {
    const token = this.storageService.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token) as JwtPayloadInterface;
      return {
        userCi: decodedToken.ci,
        userEmail: decodedToken.email,
        userRoles: decodedToken.roles
      };
    }
    return{
      userCi: 0,
      userEmail: '',
      userRoles: []
    };
  }
  setToken(token: string): void {
    this.storageService.setItem('token', token);
  }
  getToken(): string | null {
    return this.storageService.getItem('token');
  }
  isLoggedIn(): boolean {
    const loggedIn = this.storageService.getItem('isLoggedIn');
    return loggedIn === 'true';
  }
  login(userData: LoginUserInterface): void {
    this.apiClient.post('auth/login', userData).subscribe({
      next: (data: any) => {
        console.log('Login successful:', data);
        this.storageService.setItem('isLoggedIn', 'true');
        this.setToken(data.data.accessToken);
        this.router.navigate(['/home']);
      },
      error: (error: any) => {
        console.error('Error:', error);
      }
    });
  }
  logout(): void {
    this.storageService.removeItem('token');
    this.storageService.setItem('isLoggedIn', 'false');
    this.router.navigate(['/login']);
  }
}
