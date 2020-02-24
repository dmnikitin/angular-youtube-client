import { Component, OnInit } from '@angular/core';
import { UserActionsService } from '../../../core/services/user-actions.service';
import { LoadDataService } from '../../../core/services/load-data.service';
import { ISearchResponse } from '../../models/search-response.model';
import { IUserActions } from '../../../shared/models/user-actions.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public searchResponse: ISearchResponse;
  public userActions: IUserActions = {
    sortingValue: this.userActionsService.sortingValue,
    filteringValue: this.userActionsService.filteringValue
  };

  constructor(private loadDataService: LoadDataService, private userActionsService: UserActionsService) {
  }

  public ngOnInit(): void {
    this.loadDataService.dataObs.subscribe((response: ISearchResponse) => {
      this.searchResponse = response;
    });
    this.userActionsService.userActionsObs.subscribe((response: IUserActions) => {
      this.userActions = response;
    });

  }
}
