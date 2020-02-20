import { Component, OnInit, Input } from '@angular/core';
import { ISearchResponse } from '../../models/search-response.model';
import { IUserActions } from './../../models/user-actions.model';
import { UserActionsService } from './../../services/user-actions.service';
import { LoadDataService } from './../../services/load-data.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

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
