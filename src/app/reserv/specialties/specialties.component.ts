import { Component,Output,EventEmitter,Input } from '@angular/core';
import { SpecialtiesDto } from './interfaces/specialties';

@Component({
  selector: 'app-specialty',
  imports: [],
  templateUrl: './specialties.component.html',
  styleUrl: './specialties.component.scss'
})
export class SpecialtiesComponent {
  @Output() onSpecialtySelected = new EventEmitter<SpecialtiesDto>();
  selectedSpecialty?: SpecialtiesDto;
  @Input() specialty?: SpecialtiesDto;
  selectedSpecialtyChanged() {
    this.selectedSpecialty = this.specialty;
    this.onSpecialtySelected.emit(this.selectedSpecialty);
  }
}
