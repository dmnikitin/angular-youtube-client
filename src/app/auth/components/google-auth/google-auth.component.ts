import { Component, OnInit } from '@angular/core';
import { AuthService as ASLService , GoogleLoginProvider } from 'angularx-social-login';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-google-auth',
  templateUrl: './google-auth.component.html',
  styleUrls: ['./google-auth.component.scss']
})
export class GoogleAuthComponent implements OnInit {

  private loggedIn: boolean = false;

  constructor(private auth: AuthService, private social: ASLService, private router: Router) { }

  public signInWithGoogle(): void {
    this.social.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  public ngOnInit(): void {
    this.social.authState.subscribe((user) => {
      this.loggedIn = (user != null);
      if (this.loggedIn) {
        this.auth.authenticateWithGoogle(user.firstName);
      }
    });
  }

}
