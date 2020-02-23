import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  public authToken: string;
  public userAuthData: { login: string, password: string };

  constructor(private router: Router) { }

  private generateAuthToken(name: string): string {
    return `${name[name.length - 1]}${Math.floor(Math.random() * 100000)}${name[0]}`;
  }

  public saveToLocalStorage(name: string): void {
    const authToken: string = this.generateAuthToken(name);
    this.authToken = authToken;
    localStorage.setItem('authToken', this.authToken);
    console.log('token generated');
  }

  public checkAuth(userAuthData: { login: string, password: string }): void {

    if (!localStorage.getItem('authToken')) {
      this.saveToLocalStorage(userAuthData.login);
    }
    this.authToken = localStorage.getItem('authToken');
    this.router.navigate(['youtube']);
  }

}
