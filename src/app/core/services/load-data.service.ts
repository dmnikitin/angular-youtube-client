import { Injectable } from '@angular/core';
import { IUserActions } from '../core/models/user-actions.model';
import { ISearchResponse } from '../core/models/search-response.model';
import { data } from '../../assets/mockdata';

@Injectable()
export class LoadDataService {

  public data: ISearchResponse;
  constructor() { }

  public onFormSubmit(event: Event): void {
    event.preventDefault();
    this.data = data;
  }
}
