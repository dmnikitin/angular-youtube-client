import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router) { }

  public ngOnInit(): void {
  }
  public onLoginAttempt(event: Event, login?: string, password?: string): void {
    event.preventDefault();

    if (login && password) {
      this.router.navigate(['youtube']);
    }
  }

}
