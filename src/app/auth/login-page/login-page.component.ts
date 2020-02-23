import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private auth: AuthService) { }

  public ngOnInit(): void {
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
