import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, EMPTY, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import IUser from '../../shared/models/user.model';
import { tap, map, catchError } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class AuthService {

  private isAuthenticated: boolean = false;
  private authToken: string;
  public userLoginObs: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private router: Router, private http: HttpClient) { }

  // private generateAuthToken(name: string): string {
  //   return `${name[name.length - 1]}${Math.floor(Math.random() * 100000)}${name[0]}`;
  // }

  public login(login: string, password: string): Observable<{token: string}> {

    const body: IUser = { login, password };
    return this.http.post<{token: string}>('http://localhost:4000/login', body)
      .pipe(
        tap(data => {
          console.log('tap', data)
          // localStorage.setItem('authToken', data);


        }),
        map(data => {
          localStorage.setItem('authToken', data.token);
          localStorage.setItem('userName', login);
          this.isAuthenticated = true;
          this.userLoginObs.next(login);
          return data.token;
        }),
        catchError((error) => {
          if (error.status === 403) {
            return of(null);
          }
          return EMPTY;
        })
      );

    if (!localStorage.getItem('authToken')) {
      // const authToken: string = this.generateAuthToken(login);
      // this.authToken = authToken;
      // localStorage.setItem('authToken', this.authToken);
      // localStorage.setItem('userName', login);
    }
    this.isAuthenticated = true;
    this.userLoginObs.next(login);
    // this.router.navigate(['/videos']);

  }

  public signup(login: string, password: string): Observable<IUser | null> {
    const body: IUser = { login, password };
    return this.http.post<IUser>('http://localhost:4000/signup', body)
      .pipe(
        map(data => data),
        catchError((error) => {
          if (error.status === 403) {
            return of(null);
          }
          return EMPTY;
        })
      );
  }

  public logout(): void {
    console.log('out');
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
    console.log('checkAuthentication', this.isAuthenticated);
    return Promise.resolve(this.isAuthenticated);
  }

  public provideAuth(userName: string): Promise<boolean> {
    this.isAuthenticated = true;
    this.userLoginObs.next(userName);
    return Promise.resolve(true);
  }
}
