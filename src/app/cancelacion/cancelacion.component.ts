import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CuadritoDetallesComponent } from "./cuadrito-detalles/cuadrito-detalles.component";

@Component({
  selector: 'app-cancelacion',
  standalone: true,
  imports: [RouterModule, CuadritoDetallesComponent],
  templateUrl: './cancelacion.component.html',
  styleUrls: ['./cancelacion.component.scss']
})
export class CancelacionComponent {

  constructor(private router: Router) {}

  onSubmit() {
  console.log("Enviando cancelación...");
  alert("¡Éxito!");
  this.router.navigate(['/home']);
}
}
