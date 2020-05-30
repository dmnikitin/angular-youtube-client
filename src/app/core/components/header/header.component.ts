import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, EMPTY, from, of } from 'rxjs';
import { debounceTime, takeUntil, switchMap, catchError } from 'rxjs/operators';
import { AuthService } from './../../../auth/services/auth.service';
import { LoadDataService } from '../../services/load-data.service';
import { ISearchResponse } from './../../../youtube/models/search-response.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private componentDestroyed: Subject<boolean> = new Subject();
  public isSortingBoxOpen: boolean = false;
  public query: string;

  constructor(
    private authService: AuthService,
    private loadDataService: LoadDataService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.loadDataService.searchQuery
      .pipe(
        debounceTime(2000),
        switchMap((query: string) => {
          if (query.length > 3) {
            return from(this.authService.checkAuthentication()).pipe(
              switchMap( (response: boolean) => {
                if (response) {
                  this.router.navigate(['/videos'], { queryParams: { search_query: query } });
                  return from(this.loadDataService.getData(query));
                } else {
                  alert ('please login to search videos');
                  return EMPTY;
                }
              }),
              catchError((error) => {
                console.log('error: ', error);
                return of(error);
              })
          );
          } else {
            return EMPTY;
          }
        }),
        takeUntil(this.componentDestroyed),
        catchError((error) => {
          console.log('error: ', error);
          return of(error);
        })
      )
      .subscribe((data: ISearchResponse) => {
        this.loadDataService.data = data;
        this.loadDataService.dataObs.next(data);
      });

  }

  public ngOnDestroy(): void {
    this.componentDestroyed.next(true);
    this.componentDestroyed.complete();
  }

  public updateQuery(query: string): void {
    this.loadDataService.searchQuery.next(query);
  }

  public toggleSortingBoxView(): void {
    this.isSortingBoxOpen = !this.isSortingBoxOpen;
  }
}
