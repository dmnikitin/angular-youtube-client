import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ISearchResponse } from '../../models/search-response.model';
import { IUserActions } from '../../models/user-actions.model';
import { data } from '../../../assets/mockdata';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() public dataLoaded: EventEmitter<ISearchResponse> = new EventEmitter();
  @Output() public userActionsUpdated: EventEmitter<IUserActions> = new EventEmitter();

  public isSortingBoxOpen: boolean = false;
  public userActions: IUserActions;

  constructor() { }

  public ngOnInit(): void {
  }

  public onFormSubmit(event: Event): void {
    event.preventDefault();
    this.dataLoaded.emit(data);
  }

  public toggleSortingBoxView(): void {
    this.isSortingBoxOpen = !this.isSortingBoxOpen;
  }

  public onUserActionsUpdated(userActions: IUserActions): void {
    this.userActions = userActions;
    this.userActionsUpdated.emit(this.userActions);
  }

}
