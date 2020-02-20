import { Injectable } from '@angular/core';
import { IUserActions } from '../models/user-actions.model';
import { ISearchResponse } from '../models/search-response.model';
import { data } from '../../../assets/mockdata';

@Injectable()
export class LoadDataService {

  public data: ISearchResponse;
  constructor() { }

  public onFormSubmit(event: Event): void {
    event.preventDefault();
    this.data = data;
  }
}
