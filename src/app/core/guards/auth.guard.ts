import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private auth: AuthService, private router: Router) { }

  public canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

    return this.auth.checkAuthentication().then((isAuthenticated: boolean) => {
      console.log('guard');
      if (isAuthenticated) {
        return true;
      } else {
        this.router.navigate([''], { queryParams: { auth: false } });
        return false;
      }
    });
  }
}
