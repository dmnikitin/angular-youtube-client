import { Component, OnInit } from '@angular/core';
import { ISearchResponse } from './../../models/search-response.model';
import { IUserActions } from './../../models/user-actions.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public searchResponse: ISearchResponse;
  public userActions: IUserActions;

  constructor() { }

  public onGetResponse(response: ISearchResponse): void {
    this.searchResponse = response;
  }
  public onUserActionsUpdated(userActions: IUserActions): void {
    this.userActions = userActions;
  }
  public ngOnInit(): void {
  }

}
