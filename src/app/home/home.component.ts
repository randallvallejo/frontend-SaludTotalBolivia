import { Component } from '@angular/core';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';

@Component({
  selector: 'app-home',
  imports: [SobreNosotrosComponent,ServiciosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
