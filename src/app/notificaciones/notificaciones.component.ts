import { Component } from '@angular/core';
import { CuadritoNotificacionesComponent } from './cuadrito-notificaciones/cuadrito-notificaciones.component';
import { CuadroNotificacionPasadoComponent } from './cuadro-notificacion-pasado/cuadro-notificacion-pasado.component';

@Component({
  selector: 'app-notificaciones',
  imports: [CuadritoNotificacionesComponent,CuadroNotificacionPasadoComponent],
  templateUrl: './notificaciones.component.html',
  styleUrl: './notificaciones.component.scss'
})
export class NotificacionesComponent {

}
