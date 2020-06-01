import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISearchResponse } from './../../youtube/models/search-response.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptor implements HttpInterceptor {
  public intercept(req: HttpRequest<ISearchResponse>, next: HttpHandler)
    : Observable<HttpEvent<ISearchResponse>> {
      let authToken: string | undefined = localStorage.getItem('authToken');
      if (authToken) {authToken = `Bearer ${authToken}`; }
      return next.handle(req.clone({
        setHeaders: {
          'Authorization': `${authToken}`,
        },
      }));
  }
}
