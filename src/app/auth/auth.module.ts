import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FormAuthComponent } from './components/form-auth/form-auth.component';
import { GoogleAuthComponent } from './components/google-auth/google-auth.component';

@NgModule({
  declarations: [LoginPageComponent, FormAuthComponent, GoogleAuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [LoginPageComponent]
})
export class AuthModule { }
