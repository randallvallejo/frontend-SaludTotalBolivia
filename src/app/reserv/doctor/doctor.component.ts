import { Component,Input, Output, EventEmitter } from '@angular/core';
import { DoctorDto } from './interfaces/doctor';

@Component({
  selector: 'app-doctor',
  imports: [],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.scss'
})
export class DoctorComponent {
  @Input() doctor!: DoctorDto;
  @Output() onDoctorSelected = new EventEmitter<DoctorDto>();
  constructor() { }
  selectDoctor() {
    this.onDoctorSelected.emit(this.doctor);
  }
}
