import { AuthRoutingModule } from './auth-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  exports: [LoginPageComponent]
})
export class AuthModule { }
