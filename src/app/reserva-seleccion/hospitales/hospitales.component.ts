import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../../services/api-client.service';
@Component({
  selector: 'app-hospitales',
  imports: [],
  templateUrl: './hospitales.component.html',
  styleUrl: './hospitales.component.scss',
  providers: [ApiClientService],
})
export class HospitalesComponent implements OnInit {
  constructor(private apiClientService: ApiClientService) {}
  hospitales: any;
  ngOnInit() {
    this.apiClientService.get('health-institucion/test').subscribe((data) => {
      this.hospitales = data;
    });
    console.log(this.hospitales);
  }
}
