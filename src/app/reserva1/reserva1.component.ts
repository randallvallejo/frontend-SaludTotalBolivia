import { Component } from '@angular/core';
import { NavbarComponent } from "../home/navbar/navbar.component";
import { ReservarFechaComponent } from '../reservar-fecha/reservar-fecha.component';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-reserva1',
  imports: [NavbarComponent,RouterOutlet, RouterLink],
  templateUrl: './reserva1.component.html',
  styleUrl: './reserva1.component.scss'
})
export class Reserva1Component {

}
