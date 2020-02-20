import { Component, OnInit } from '@angular/core';
import { ISearchResponse } from './../../models/search-response.model';
import { IUserActions } from './../../models/user-actions.model';
import { LoadDataService } from './../../services/load-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public searchResponse: ISearchResponse;
  public userActions: IUserActions;

  constructor(private loadDataService: LoadDataService) { }

  public onUserActionsUpdated(userActions: IUserActions): void {
    this.userActions = userActions;
  }

  public ngOnInit(): void {
    this.loadDataService.dataObs.subscribe((response: ISearchResponse) => {
      this.searchResponse = response;
    });
  }

}
