import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserActionsService } from '../../../core/services/user-actions.service';
import { LoadDataService } from '../../../core/services/load-data.service';
import { ISearchResponse } from '../../models/search-response.model';
import { IUserActions } from '../../../shared/models/user-actions.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {

  private componentDestroyed: Subject<boolean> = new Subject();
  public searchResponse: ISearchResponse = this.loadDataService.data;
  public userActions: IUserActions;

  constructor(private loadDataService: LoadDataService, private userActionsService: UserActionsService) {
  }

  public ngOnInit(): void {
    this.loadDataService.dataObs
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe((searchResponse: ISearchResponse) => {
        this.searchResponse = searchResponse;
      });
    this.userActionsService.userActions
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe((userActions: IUserActions) => {
        this.userActions = { ...userActions };
      });
  }

  public ngOnDestroy(): void {
    this.componentDestroyed.next(true);
    this.componentDestroyed.complete();
  }
}
