import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private isAuthenticated: boolean = false;
  private authToken: string;
  public userLoginObs: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private router: Router) { }

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
    this.isAuthenticated = true;
    this.userLoginObs.next(login);
    this.router.navigate(['/videos']);
  }

  public logout(): void {
    this.isAuthenticated = false;
    this.authToken = '';
    this.userLoginObs.next('');
    this.router.navigate(['']);
    localStorage.removeItem('authToken');
    localStorage.removeItem('userName');
  }

  public checkAuthentication(): Promise<boolean> {
    const authToken: string | undefined = localStorage.getItem('authToken');
    const userName: string | undefined = localStorage.getItem('userName');
    if (authToken) {
      this.authToken = authToken;
      this.isAuthenticated = true;
      this.userLoginObs.next(userName);
    }
    return Promise.resolve(this.isAuthenticated);
  }
}
