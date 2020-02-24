import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ISearchResponse } from '../../youtube/models/search-response.model';
import { data } from '../../../assets/mockdata';

@Injectable()
export class LoadDataService {

  private _data: ISearchResponse;
  get data(): ISearchResponse { return this._data; }
  set data(value: ISearchResponse) { this._data = value; }
  public dataObs: Subject<ISearchResponse> = new Subject<ISearchResponse>();

  constructor() { }

  public onFormSubmit(): void {
    this.data = data;
    this.dataObs.next(this.data);
  }

}
