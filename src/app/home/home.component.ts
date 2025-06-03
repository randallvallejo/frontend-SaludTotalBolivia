import { Component } from '@angular/core';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  imports: [SobreNosotrosComponent,ServiciosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Home');
  }
}
