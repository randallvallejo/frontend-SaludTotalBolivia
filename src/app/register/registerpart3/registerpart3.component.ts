import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registerpart3',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './registerpart3.component.html',
  styleUrl: './registerpart3.component.scss'
})
export class Registerpart3Component implements OnInit {
  @Input() formGroup!: FormGroup;
  @Output() prevStep = new EventEmitter<void>();
  @Output() submitForm = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
    this.formGroup.addControl('department', new FormControl('', Validators.required));
    this.formGroup.addControl('province', new FormControl('', Validators.required));
    this.formGroup.addControl('street', new FormControl('', Validators.required));
  }

  onPrev() {
    this.prevStep.emit();
  }

  onSubmitPart3() {
    if (this.formGroup.valid) {
      this.submitForm.emit();
    } else {
      this.markFormAsTouched(this.formGroup);
    }
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