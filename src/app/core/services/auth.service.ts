import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {

  private _authToken: string;
  get authToken(): string { return this._authToken; }
  public userLoginObs: Subject<string> = new Subject<string>();

  constructor(private router: Router) { }

  private generateAuthToken(name: string): string {
    return `${name[name.length - 1]}${Math.floor(Math.random() * 100000)}${name[0]}`;
  }

  public saveToLocalStorage(name: string): void {
    const authToken: string = this.generateAuthToken(name);
    this._authToken = authToken;
    localStorage.setItem('authToken', this._authToken);
  }

  public login(login: string, password: string): void {

    if (!localStorage.getItem('authToken')) {
      this.saveToLocalStorage(login);
    }
    this.userLoginObs.next(login);
    this._authToken = localStorage.getItem('authToken');
    this.router.navigate(['videos']);
  }

  public logout(): void {
    this._authToken = '';
    this.userLoginObs.next('');
    localStorage.removeItem('authToken');
    this.router.navigate(['']);
  }

}
