import { Component, OnInit } from '@angular/core';
import { ISearchResponse } from './../../models/search-response.model';
import { IUserActions } from './../../models/user-actions.model';
import { LoadDataService } from './../../services/load-data.service';
import { UserActionsService } from './../../services/user-actions.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public searchResponse: ISearchResponse;
  public userActions: IUserActions;

  constructor(private loadDataService: LoadDataService, private userActionsService: UserActionsService) { }

  public ngOnInit(): void {
    this.loadDataService.dataObs.subscribe((response: ISearchResponse) => {
      this.searchResponse = response;
    });
    this.userActionsService.userActionsObs.subscribe((response: IUserActions) => {
      this.userActions = response;
    });
  }

}
