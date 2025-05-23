import { Component, OnInit }      from '@angular/core';
import { CommonModule }           from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
}                                 from '@angular/forms';

@Component({
  selector: 'app-register3',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './register3.component.html',
  styleUrls:   ['./register3.component.scss']
})
export class Register3Component implements OnInit {
  registerForm!: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      emergencyName:    ['', Validators.required],
      emergencyPhone:   ['', [Validators.required, Validators.pattern(/^\+?\d{7,15}$/)]],
      bloodType:        ['', Validators.required],
      gender:           ['', Validators.required],
      medicalHistory:   ['', Validators.required]
    });
  }

  isFieldInvalid(field: string): boolean {
    const ctrl = this.registerForm.get(field);
    return !!(ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched));
  }

  getFieldError(field: string): string {
    const ctrl = this.registerForm.get(field);
    if (!ctrl || !ctrl.errors) return '';
    if (ctrl.errors['required']) return 'Este campo es obligatorio';
    if (ctrl.errors['pattern'])  return 'Formato inválido';
    return 'Valor inválido';
  }

  onSubmit(): void {
    if (this.registerForm.invalid) return;
    this.isLoading = true;

    console.log('Datos médicos:', this.registerForm.value);

    setTimeout(() => {
      this.isLoading = false;
      // aquí rediriges o muestras un mensaje de éxito
    }, 800);
  }
}

