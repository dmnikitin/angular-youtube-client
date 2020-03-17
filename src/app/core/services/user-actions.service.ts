import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IUserActions } from '../../shared/models/user-actions.model';

@Injectable()
export class UserActionsService {

  private _userActions: IUserActions = { isSortingByDate: true, isAscending: false, filteringValue: '' };
  get userActions(): IUserActions { return this._userActions; }
  set userActions(userActions: IUserActions) { this._userActions = userActions; }

  public userActionsObs: Subject<IUserActions> = new Subject<IUserActions>(
  );

  constructor() { }

  public sortingValueUpdated(isSortingByDate: boolean): void {
    this.userActions = { ...this.userActions, isAscending: !this.userActions.isAscending, isSortingByDate };
    this.userActionsObs.next(this.userActions);
  }
  public filteringValueUpdated(filteringValue: string): void {
    this.userActions = { ...this.userActions, filteringValue };
    this.userActionsObs.next(this.userActions);
  }
}
