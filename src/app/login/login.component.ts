import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ApiClientService } from '../services/api-client.service';
import { LoginUserInterface } from './interfaces/login-user.interface';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { LoggedUserInterface } from './interfaces/logged-user.interface';

@Component({
  selector: 'app-login',
  imports: [RouterOutlet, RouterLink,
    ReactiveFormsModule, CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private apiClient: ApiClientService, private titleService: Title,
              private authService: AuthService
  ) {
    this.titleService.setTitle('Login');
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      ci: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  login() {
    if (this.loginForm.valid) {
      const user: LoginUserInterface = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
        ci: Number(this.loginForm.value.ci) || 0
      };
      this.authService.login(user);  
    }
  }
}