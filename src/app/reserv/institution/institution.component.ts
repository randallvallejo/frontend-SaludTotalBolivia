import { Component,Input,EventEmitter,Output } from '@angular/core';
import { InstitutionDto } from './dto/institution.dto';
@Component({
  selector: 'app-institution',
  imports: [],
  templateUrl: './institution.component.html',
  styleUrl: './institution.component.scss'
})
export class InstitutionComponent {
  @Input() institution:InstitutionDto | null = null;
  @Output() institutionSelected = new EventEmitter<InstitutionDto>();
  selectedInstitution(){
    if (this.institution) {
      this.institutionSelected.emit(this.institution);
    }
  }
}
