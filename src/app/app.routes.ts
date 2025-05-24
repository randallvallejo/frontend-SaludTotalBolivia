// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent }           from './login/login.component';
import { HomeComponent }            from './home/home.component';
import { RegisterComponent }        from './register/register.component';
import { Register2Component }   from './register2/register2.component';  
import { Register3Component }   from './register3/register3.component'; 
import { ConsultasComponent }       from './consultas/consultas.component';

export const routes: Routes = [
  { path: 'home',        component: HomeComponent },
  { path: 'reserv',      component: HomeComponent },
  { path: 'consultas',   component: ConsultasComponent },
  { path: 'about-us',    component: HomeComponent },
  { path: 'search',      component: HomeComponent },
  { path: 'login',       component: LoginComponent },
  { path: 'register',    component: RegisterComponent },   
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
