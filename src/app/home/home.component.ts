import { Component } from '@angular/core';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ApiClientService } from '../services/api-client.service';
@Component({
  selector: 'app-home',
  imports: [SobreNosotrosComponent,ServiciosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers:[ApiClientService]
})
export class HomeComponent {
  
}
