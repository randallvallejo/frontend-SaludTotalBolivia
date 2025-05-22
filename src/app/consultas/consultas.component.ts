import { Component } from '@angular/core';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { PrincipalComponent } from './principal/principal.component';
import { NavbarComponent } from '../home/navbar/navbar.component';

@Component({
  selector: 'app-consultas',
  imports: [PreguntasFrecuentesComponent, PrincipalComponent, NavbarComponent],
  templateUrl: './consultas.component.html',
  styleUrl: './consultas.component.scss'
})
export class ConsultasComponent {

}
