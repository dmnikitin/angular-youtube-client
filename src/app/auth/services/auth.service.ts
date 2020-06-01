import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import IUser from '../../shared/models/user.model';
import errorCallback from '../../shared/helpers/error-callback';

@Injectable({ providedIn: 'root' })
export class AuthService {

  public $login: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public $isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public $isLoggedWithGoogle: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private router: Router, private http: HttpClient) { }

  public login(login: string, password: string): Observable<{token: string}> {
    const body: IUser = { login, password };
    return this.http.post<{token: string}>('http://localhost:4000/login', body)
      .pipe(
        map(data => {
          localStorage.setItem('authToken', data.token);
          this.$isAuthenticated.next(true);
          this.$login.next(login);
          return data;
        }),
        catchError(errorCallback)
      );
  }

  public signup(login: string, password: string): Observable<IUser | null> {
    const body: IUser = { login, password };
    return this.http.post<IUser>('http://localhost:4000/signup', body)
      .pipe(
        map(data => data),
        catchError(errorCallback)
      );
  }

  public checkAuthentication(): void {
    this.http.get('http://localhost:4000/auth')
      .subscribe( (data: IUser) => {
        if (data) {
          this.$isAuthenticated.next(true);
          this.$login.next(data.login);
          this.router.navigate(['/videos']);
        }
      });
  }

  public authenticateWithGoogle(login: string): void {
    this.http.post('http://localhost:4000/token', {login})
      .subscribe( (data: {token: string}) => {
        if (data) {
          localStorage.setItem('authToken', data.token);
          this.$isLoggedWithGoogle.next(true);
          this.$isAuthenticated.next(true);
          this.$login.next(login);
          this.router.navigate(['/videos']);
        }
      });
  }

  public logout(isLoggedWithGoogle?: boolean): void {
    if (isLoggedWithGoogle) {
      this.$isLoggedWithGoogle.next(false);
    }
    this.$isAuthenticated.next(false);
    this.$login.next('');
    this.router.navigate(['']);
    localStorage.removeItem('authToken');
  }
}
