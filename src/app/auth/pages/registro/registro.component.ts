import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      ],
      username: ['', [Validators.required, this.vs.Nstrider]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    },
    {
      validators: [this.vs.camposIguales('password', 'password2')],
    }
  );

  constructor(private fb: FormBuilder, private vs: ValidatorService) {}

  ngOnInit(): void {
    this.form.reset({
      nombre: 'Dylan Osorio',
      email: 'test1@test.com',
      username: 'dylan_osof04',
    });
  }

  campN(campo: string) {
    return this.form.get(campo)?.invalid && this.form.get(campo)?.touched;
  }

  submitF() {
    this.form.markAllAsTouched;
  }
}
