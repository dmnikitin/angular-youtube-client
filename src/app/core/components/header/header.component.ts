import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, EMPTY } from 'rxjs';
import { debounceTime, takeUntil, switchMap } from 'rxjs/operators';
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

  constructor(private loadDataService: LoadDataService, private router: Router) { }

  public ngOnInit(): void {
    this.loadDataService.searchQuery
      .pipe(
        debounceTime(2000),
        switchMap((query: string) => {
          if (query.length > 3) {
            this.router.navigate(['/videos'], { queryParams: { search_query: query } });
            return this.loadDataService.getData(query);
          } else {
            return EMPTY;
          }
        }),
        takeUntil(this.componentDestroyed)
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
