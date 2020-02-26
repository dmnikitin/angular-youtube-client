import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {

  private _authToken: string;
  get authToken(): string { return this._authToken; }
  set authToken(token: string) { this._authToken = token; }
  public userLoginObs: BehaviorSubject<string>;

  constructor(private router: Router) {
    this.initialTokenCheck();
  }

  private generateAuthToken(name: string): string {
    return `${name[name.length - 1]}${Math.floor(Math.random() * 100000)}${name[0]}`;
  }

  public login(login: string, password: string): void {

    if (!localStorage.getItem('authToken')) {
      const authToken: string = this.generateAuthToken(login);
      this.authToken = authToken;
      localStorage.setItem('authToken', this.authToken);
      localStorage.setItem('userName', login);
    }
    this.userLoginObs.next(login);
    this.router.navigate(['videos']);
  }

  public logout(): void {
    this.authToken = '';
    this.userLoginObs.next('');
    this.router.navigate(['']);
    localStorage.removeItem('authToken');
    localStorage.removeItem('userName');
  }

  public initialTokenCheck(): void {
    const authToken: string | undefined = localStorage.getItem('authToken');
    const userName: string | undefined = localStorage.getItem('userName');
    if (authToken) {
      this.authToken = authToken;
    }
    this.userLoginObs = new BehaviorSubject<string>(userName ? userName : '');
  }
}
