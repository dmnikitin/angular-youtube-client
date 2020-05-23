import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-auth',
  templateUrl: './form-auth.component.html',
  styleUrls: ['./form-auth.component.scss']
})
export class FormAuthComponent implements OnInit {

  public authForm: FormGroup;

  constructor(public auth: AuthService, private router: Router, private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.initForm();
    this.auth.checkAuthentication().then((isAuthenticated: boolean) => {
      if (isAuthenticated) {
        this.router.navigate(['/videos']);
      }
    });
  }

  public initForm(): void {
    this.authForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  public onLoginAttempt(): void {
    const { name, password } = this.authForm.value;
    this.auth.login(name, password);
  }

  public onSignupAttempt(): void {
    console.log('signup');
  }
}
