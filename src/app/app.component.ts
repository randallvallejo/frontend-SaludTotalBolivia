import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './home/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Title } from '@angular/platform-browser';
import { Reserva1Component } from './reserva1/reserva1.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { ReservarFechaComponent } from './reservar-fecha/reservar-fecha.component';
import { ReservaSeleccionComponent } from './reserva-seleccion/reserva-seleccion.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,HomeComponent, LoginComponent,RegisterComponent,ConsultasComponent, Reserva1Component, ReservarFechaComponent, ReservaSeleccionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private title: Title) {
  }
  ngOnInit() {
    this.title.setTitle('Home');
  }
}