import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUserActions } from '../../shared/models/user-actions.model';

@Injectable()
export class UserActionsService {

  public userActions: BehaviorSubject<IUserActions> = new BehaviorSubject<IUserActions>({
    isSortingByDate: true, isAscending: false, filteringValue: ''
  });

  constructor() { }

  public sortingValueUpdated(isSortingByDate: boolean): void {
    const current: IUserActions = this.userActions.getValue();
    this.userActions.next({
      filteringValue: current.filteringValue,
      isAscending: !current.isAscending,
      isSortingByDate,
    });
  }
  public filteringValueUpdated(filteringValue: string): void {
    const current: IUserActions = this.userActions.getValue();
    this.userActions.next({ ...current, filteringValue });
  }
}
