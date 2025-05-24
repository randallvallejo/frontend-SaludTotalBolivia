import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registerpart2',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './registerpart2.component.html',
  styleUrl: './registerpart2.component.scss'
})
export class Registerpart2Component implements OnInit {
  @Input() formGroup!: FormGroup;
  @Output() nextStep = new EventEmitter<void>();
  @Output() prevStep = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {
    // Add the birthDate control and the custom validator
    this.formGroup.addControl('birthDate', new FormControl('', [Validators.required, this.futureDateValidator]));
    // You might also want to ensure 'bloodType' and 'photo' are added if not already in mainForm
    this.formGroup.addControl('bloodType', new FormControl('', Validators.required));
    this.formGroup.addControl('photo', new FormControl('')); // Assuming photo is optional
  }

  // Custom validator function
  private futureDateValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null; // Don't validate if no value is present (Validators.required handles this)
    }

    const selectedDate = new Date(control.value);
    const today = new Date();

    // Set hours, minutes, seconds, milliseconds to 0 for comparison
    selectedDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    if (selectedDate > today) {
      return { futureDate: true }; // Return an error object if the date is in the future
    }
    return null; // No validation error
  }

  onNext() {
    if (this.formGroup.valid) {
      this.nextStep.emit();
    } else {
      this.markFormAsTouched(this.formGroup);
    }
  }

  onPrev() {
    this.prevStep.emit();
  }

  private markFormAsTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormAsTouched(control);
      }
    });
  }
}