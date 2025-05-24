import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registerpart1',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './registerpart1.component.html',
  styleUrl: './registerpart1.component.scss'
})
export class Registerpart1Component implements OnInit {
  @Input() formGroup!: FormGroup; // Input FormGroup from the parent component
  @Output() nextStep = new EventEmitter<void>(); // Output event to move to the next step

  // Properties to control the type of password input fields
  passwordFieldType: string = 'password';
  confirmPasswordFieldType: string = 'password';

  constructor() { }

  ngOnInit() {
    // Ensure these controls are added if not already in the parent FormGroup initialization
    // (They usually are, but good practice if this component initializes them)
    this.formGroup.addControl('userName', new FormControl('', Validators.required));
    this.formGroup.addControl('email', new FormControl('', [Validators.required, Validators.email]));
    this.formGroup.addControl('password', new FormControl('', Validators.required));
    this.formGroup.addControl('confirmPassword', new FormControl('', Validators.required));
  }

  // Method to toggle password visibility for the 'password' field
  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  // Method to toggle password visibility for the 'confirmPassword' field
  toggleConfirmPasswordVisibility() {
    this.confirmPasswordFieldType = this.confirmPasswordFieldType === 'password' ? 'text' : 'password';
  }

  onNext() {
    // Mark all controls as touched before checking validity to display errors
    this.markFormAsTouched(this.formGroup);
    if (this.formGroup.valid) {
      this.nextStep.emit(); // Emit event to parent to proceed to next step
    }
  }

  // Helper method to recursively mark all form controls as touched
  private markFormAsTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched(); // Mark the current control as touched
      if (control instanceof FormGroup) {
        // If it's a nested FormGroup, recursively mark its controls as touched
        this.markFormAsTouched(control);
      }
    });
  }
}