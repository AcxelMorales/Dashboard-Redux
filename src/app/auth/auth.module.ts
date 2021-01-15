import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';

@NgModule({
  declarations: [
    LoginComponent,
    CreateAccountComponent
  ],
  exports: [
    LoginComponent,
    CreateAccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
