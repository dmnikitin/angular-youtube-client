import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IUserActions } from '../../shared/models/user-actions.model';

@Injectable()
export class UserActionsService {

  private _sortingValue: string = '';
  private _filteringValue: string = '';
  get sortingValue(): string { return this._sortingValue; }
  get filteringValue(): string { return this._filteringValue; }
  set sortingValue(sortingValue: string) { this._sortingValue = sortingValue; }
  set filteringValue(filteringValue: string) { this._filteringValue = filteringValue; }

  public userActionsObs: Subject<IUserActions> = new Subject<IUserActions>();

  constructor() { }

  public sortingValueUpdated(sortingValue: string): void {
    this.sortingValue = sortingValue;
    this.userActionsObs.next({ sortingValue, filteringValue: this.filteringValue });
  }
  public filteringValueUpdated(filteringValue: string): void {
    this.filteringValue = filteringValue;
    this.userActionsObs.next({ sortingValue: this.sortingValue, filteringValue });
  }
}
