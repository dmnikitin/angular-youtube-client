import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AuthService as ASLService, GoogleLoginProvider } from 'angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  public authForm: FormGroup;

  constructor(
    private social: ASLService,
    public auth: AuthService,
    private router: Router,
    private fb: FormBuilder
    ) { }

  public ngOnInit(): void {
    this.initForm();
  //   this.auth.checkAuthentication().then((isAuthenticated: boolean) => {
  //     if (isAuthenticated) {
  //       this.router.navigate(['/videos']);
  //     }
  //   });
  //   this.social.authState.subscribe((user) => {

  //     // this.loggedIn = (user != null);
  //     console.log('subscr');
  //     if (user) {
  //       this.auth.provideAuth(user.firstName);
  //       this.router.navigate(['/videos']);
  //     } else {
  //       this.router.navigate(['']);
  //     }
  //   });
  }

  public initForm(): void {
    this.authForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  public signInWithGoogle(): void {
    this.social.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

}
