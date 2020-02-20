import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IUserActions } from './../models/user-actions.model';

@Injectable()
export class UserActionsService {

  public userActions: IUserActions = { sortingValue: '', filteringValue: '' };
  public userActionsObs: Subject<IUserActions> = new Subject<IUserActions>();

  constructor() { }

  public userActionsUpdated(userActions: IUserActions): void {
    this.userActionsObs.next(userActions);
  }
}
