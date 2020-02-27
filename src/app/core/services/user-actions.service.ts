import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IUserActions } from '../../shared/models/user-actions.model';

@Injectable()
export class UserActionsService {

  private _userActions: IUserActions = { sortingValue: '', filteringValue: '', isAscending: false };
  get userActions(): IUserActions { return this._userActions; }
  set userActions(userActions: IUserActions) { this._userActions = userActions; }

  public userActionsObs: Subject<IUserActions> = new Subject<IUserActions>(
  );

  constructor() { }

  public sortingValueUpdated(sortingValue: string): void {
    this.userActions = { ...this.userActions, isAscending: !this.userActions.isAscending, sortingValue };
    this.userActionsObs.next(this.userActions);
  }
  public filteringValueUpdated(filteringValue: string): void {
    this.userActions = { ...this.userActions, filteringValue };
    this.userActionsObs.next(this.userActions);
  }
}
