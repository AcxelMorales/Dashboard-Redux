import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html'
})
export class CreateAccountComponent implements OnInit {

  formAccount: FormGroup;

  constructor(
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.formAccount = this.formBuilder.group({
      nombre: [null, [Validators.required]],
      correo: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  public onSubmit(): void {
    const { nombre, correo, password } = this.formAccount.value;

  }

}
