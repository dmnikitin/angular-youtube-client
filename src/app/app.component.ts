import { Component } from '@angular/core';
import { ISearchResponse } from './models/search-response.model';
import { IUserActions } from './models/user-actions.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public searchResponse: ISearchResponse;
  public userActions: IUserActions;

  public onGetResponse(response: ISearchResponse): void {
    this.searchResponse = response;
  }
  public onGetUserActionsUpdate(value: IUserActions): void {
    this.userActions = value;
  }

}
