import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IUserActions } from '../../models/user-actions.model';
import { LoadDataService } from '../../services/load-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() public userActionsUpdated: EventEmitter<IUserActions> = new EventEmitter();

  public isSortingBoxOpen: boolean = false;
  public userActions: IUserActions;

  constructor(private loadDataService: LoadDataService) { }

  public ngOnInit(): void {
  }

  public onFormSubmit(event: Event): void {
    event.preventDefault();
    this.loadDataService.onFormSubmit();
  }

  public toggleSortingBoxView(): void {
    this.isSortingBoxOpen = !this.isSortingBoxOpen;
  }

  public onUserActionsUpdated(userActions: IUserActions): void {
    this.userActions = userActions;
    this.userActionsUpdated.emit(this.userActions);
  }

}
