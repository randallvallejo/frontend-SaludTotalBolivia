import { Component, OnInit }      from '@angular/core';
import { CommonModule }           from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
}                                 from '@angular/forms';

@Component({
  selector: 'app-register2',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './register2.component.html',
  styleUrls:   ['./register2.component.scss']
})
export class Register2Component implements OnInit {
  registerForm!: FormGroup;
  selectedFile: File | null = null;
  isLoading = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fullName: ['',
        Validators.required
      ],
      ci:       ['',
        Validators.required
      ],
      day:     ['',
        [Validators.required, Validators.min(1), Validators.max(31)]
      ],
      month:   ['',
        [Validators.required, Validators.min(1), Validators.max(12)]
      ],
      year:    ['',
        [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]
      ],
      address: ['',
        Validators.required
      ],    // ← aquí agregamos el nuevo control
      phone:   ['',
        Validators.required
      ]
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
    if (ctrl.errors['min'])      return 'Valor demasiado bajo';
    if (ctrl.errors['max'])      return 'Valor demasiado alto';
    return 'Valor inválido';
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit(): void {
    if (this.registerForm.invalid) return;
    this.isLoading = true;

    const payload = {
      ...this.registerForm.value,
      photo: this.selectedFile
    };
    console.log('Datos a enviar:', payload);

    setTimeout(() => {
      this.isLoading = false;
      // redirigir o mostrar éxito
    }, 1000);
  }
}
