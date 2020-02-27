import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  public ngOnInit(): void {
    this.auth.checkAuthentication().then((isAuthenticated: boolean) => {
      if (isAuthenticated) {
        this.router.navigate(['videos']);
      }
    });

  }
  public onLoginAttempt(event: Event, login?: string, password?: string): void {
    event.preventDefault();
    if (!login || !password) {
      alert('please enter login and password');
      return;
    }
    this.auth.login(login, password);
  }

}
