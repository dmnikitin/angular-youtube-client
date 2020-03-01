import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { LoadDataService } from '../../services/load-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private componentDestroyed: Subject<boolean> = new Subject();
  public isSortingBoxOpen: boolean = false;

  constructor(private loadDataService: LoadDataService) { }

  public ngOnInit(): void {
    this.loadDataService.searchQuery
      .pipe(debounceTime(2000))
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe((query: string) => this.loadDataService.getData(query));
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
