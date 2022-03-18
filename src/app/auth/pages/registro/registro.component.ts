import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [],
})
export class RegistroComponent implements OnInit {
  form: FormGroup = this.fb.group(
    {
      nombre: [
        '',
        [
          Validators.required,
          Validators.pattern(this.vs.nombreApellidoPattern),
        ],
      ],
      email: [
        '',
        [Validators.required, Validators.pattern(this.vs.emailPattern)],
        [this.ev],
      ],
      username: ['', [Validators.required, this.vs.Nstrider]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    },
    {
      validators: [this.vs.camposIguales('password', 'password2')],
    }
  );

  get EmailErrorMsg(): string {
    const errors = this.form.get('email')?.errors;
    if (errors?.['required']) {
      return 'Email es obligatorio';
    } else if (errors?.['pattern']) {
      return 'El valor ingresado no tiene formato de correo';
    } else if (errors?.['emailTomado']) {
      return 'El email ya fue tomado';
    }

    return '';
  }

  constructor(
    private fb: FormBuilder,
    private vs: ValidatorService,
    private ev: EmailValidatorService
  ) {}

  ngOnInit(): void {
    this.form.reset({
      nombre: 'Dylan Osorio',
      email: 'test1@test.com',
      username: 'dylan_osof04',
      password: '123456',
      password2: '123456',
    });
  }

  campN(campo: string) {
    return this.form.get(campo)?.invalid && this.form.get(campo)?.touched;
  }

  submitF() {
    this.form.markAllAsTouched;
  }
}
