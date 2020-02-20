import { Component, OnInit } from '@angular/core';
import { UserActionsService } from './../../services/user-actions.service';
import { IUserActions } from './../../models/user-actions.model';

@Component({
  selector: 'app-sorting-box',
  templateUrl: './sorting-box.component.html',
  styleUrls: ['./sorting-box.component.scss']
})
export class SortingBoxComponent implements OnInit {

  constructor(private userActionsService: UserActionsService) { }

  public ngOnInit(): void {
  }

  public sortBy(sortingValue: HTMLInputElement): void {
    const newValue: IUserActions = {
      sortingValue: sortingValue.textContent,
      filteringValue: this.userActionsService.userActions.filteringValue,
    };
    this.userActionsService.userActionsUpdated(newValue);
  }
  public filterBy(filteringValue: string): void {
    const newValue: IUserActions = {
      sortingValue: this.userActionsService.userActions.filteringValue,
      filteringValue,
    };
    this.userActionsService.userActionsUpdated(newValue);
  }

}
