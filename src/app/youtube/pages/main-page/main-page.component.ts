import { Component, OnInit } from '@angular/core';
import { ISearchResponse } from '../../models/search-response.model';
import { IUserActions } from '../../../shared/models/user-actions.model';
import { UserActionsService } from '../../../core/services/user-actions.service';
import { LoadDataService } from '../../../core/services/load-data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public searchResponse: ISearchResponse;
  public userActions: IUserActions = this.userActionsService.userActions;
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
