import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  FormsModule, FormGroup, FormBuilder, Validators,
  ReactiveFormsModule, FormControl, AbstractControl
} from '@angular/forms';
import { Registerpart1Component } from './registerpart1/registerpart1.component';
import { Registerpart2Component } from './registerpart2/registerpart2.component';
import { Registerpart3Component } from './registerpart3/registerpart3.component';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,
    Registerpart1Component,
    CommonModule,
    FormsModule,
    Registerpart2Component,
    Registerpart3Component,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  currentStep = 1;
  mainForm: FormGroup;
  formData: any = {};

  constructor(private fb: FormBuilder) {
    this.mainForm = this.fb.group({
      step1: this.fb.group({
        userName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      }, { validator: this.passwordMatchValidator }),
      step2: this.fb.group({
        name: ['', Validators.required],
        lastName: ['', Validators.required],
        ci: ['', Validators.required],
        birthDate: ['', Validators.required],
        phone: ['', Validators.required],
        bloodType: ['', Validators.required],
        photo: ['']
      }),
      step3: this.fb.group({
        department: ['', Validators.required],
        province: ['', Validators.required],
        street: ['', Validators.required]
      })
    });
  }

  ngOnInit() {}

  private passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null
      : { mismatch: true };
  }

  nextStep(step: number) {
    const step1FormGroup = this.mainForm.get('step1') as FormGroup;
    const step2FormGroup = this.mainForm.get('step2') as FormGroup;
    const step3FormGroup = this.mainForm.get('step3') as FormGroup;

    if (step === 1 && step1FormGroup?.valid) {
      this.formData = { ...this.formData, ...step1FormGroup.value };
      this.currentStep = 2;
    } else if (step === 2 && step2FormGroup?.valid) {
      this.formData = { ...this.formData, ...step2FormGroup.value };
      this.currentStep = 3;
    }
    else {
      if (step === 1) {
        this.markFormGroupAsTouched(step1FormGroup);
      } else if (step === 2) {
        this.markFormGroupAsTouched(step2FormGroup);
      }
    }
  }

  prevStep() {
    this.currentStep = Math.max(1, this.currentStep - 1);
  }

  onSubmit() {
    if (this.mainForm.valid) {
      this.formData = this.mainForm.value;
      let finalData = {
        userCi: this.formData.step1.ci,
        userEmail: this.formData.step1.email,
        userName: this.formData.step1.userName,
        userPassword: this.formData.step1.password,
        userPhone: this.formData.step2.phone,
        name: this.formData.step2.name,
        lastName: this.formData.step2.lastName,
        birthDate: this.formData.step2.birthDate,
        bloodType: this.formData.step2.bloodType,
        departament: this.formData.step3.department,
        province: this.formData.step3.province,
        street: this.formData.step3.street
      }
    }
  }

  private markFormGroupAsTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupAsTouched(control);
      }
    });
  }
  get step1Form(): FormGroup {
    return this.mainForm.get('step1') as FormGroup;
  }

  get step2Form(): FormGroup {
    return this.mainForm.get('step2') as FormGroup;
  }

  get step3Form(): FormGroup {
    return this.mainForm.get('step3') as FormGroup;
  }
}