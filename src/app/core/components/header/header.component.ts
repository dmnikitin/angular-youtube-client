import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EMPTY, from } from 'rxjs';
import { debounceTime, switchMap, catchError } from 'rxjs/operators';
import { AuthService } from './../../../auth/services/auth.service';
import { LoadDataService } from '../../services/load-data.service';
import { ISearchResponse } from './../../../youtube/models/search-response.model';
import errorCallback from '../../../shared/helpers/error-callback';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isSortingBoxOpen: boolean = false;
  public query: string;

  constructor(
    private authService: AuthService,
    private loadDataService: LoadDataService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.authService.checkAuthentication();
    this.loadDataService.searchQuery
      .pipe(
        debounceTime(2000),
        switchMap((query: string) => {
          if (query.length > 3) {
            return from(this.authService.$isAuthenticated).pipe(
              switchMap( (response: boolean) => {
                if (response) {
                  this.router.navigate(['/videos'], { queryParams: { search_query: query } });
                  return from(this.loadDataService.getData(query));
                } else {
                  return EMPTY;
                }
              }),
              catchError(errorCallback)
          );
          } else {
            return EMPTY;
          }
        }),
        catchError(errorCallback)
      )
      .subscribe((data: ISearchResponse) => {
        this.loadDataService.data = data;
        this.loadDataService.dataObs.next(data);
      });

  }

  public updateQuery(query: string): void {
    this.loadDataService.searchQuery.next(query);
  }

  public toggleSortingBoxView(): void {
    this.isSortingBoxOpen = !this.isSortingBoxOpen;
  }
}
