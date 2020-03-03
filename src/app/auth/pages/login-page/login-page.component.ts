import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  private authForm: FormGroup;
  constructor(private auth: AuthService, private router: Router, private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.initForm();
    this.auth.checkAuthentication().then((isAuthenticated: boolean) => {
      if (isAuthenticated) {
        this.router.navigate(['videos']);
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

}
