// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent }           from './login/login.component';
import { HomeComponent }            from './home/home.component';
import { RegisterComponent }        from './register/register.component';
import { ConsultasComponent }       from './consultas/consultas.component';
import { Reserva1Component } from './reserva1/reserva1.component';
import { ReservarFechaComponent } from './reservar-fecha/reservar-fecha.component';
import { ReservaSeleccionComponent } from './reserva-seleccion/reserva-seleccion.component';

export const routes: Routes = [
  { path: 'home',        component: HomeComponent },
  { path: 'reserv',      component: HomeComponent },
  { path: 'consultas',   component: ConsultasComponent },
  { path: 'about-us',    component: HomeComponent },
  { path: 'search',      component: HomeComponent },
  { path: 'login',       component: LoginComponent },
  { path: 'register',    component: RegisterComponent },    
  { path: 'reservaSeleccion', component: ReservaSeleccionComponent },  
  { path: 'reservarFecha', component: ReservarFechaComponent },
  {path:'reserva1', component: Reserva1Component},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
