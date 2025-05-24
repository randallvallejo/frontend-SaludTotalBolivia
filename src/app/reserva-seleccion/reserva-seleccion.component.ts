import { Component } from '@angular/core';
import { HospitalesComponent } from "./hospitales/hospitales.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { ReservaConsultasComponent } from "./reserva-consultas/reserva-consultas.component";
import { AnalisisComponent } from "./analisis/analisis.component";

@Component({
  selector: 'app-reserva-seleccion',
  imports: [HospitalesComponent, ReservaConsultasComponent, AnalisisComponent,RouterOutlet, RouterLink],
  templateUrl: './reserva-seleccion.component.html',
  styleUrl: './reserva-seleccion.component.scss'
})
export class ReservaSeleccionComponent {

}
