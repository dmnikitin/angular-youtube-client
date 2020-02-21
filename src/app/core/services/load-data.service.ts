import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ISearchResponse } from '../../youtube/models/search-response.model';
import { data } from '../../../assets/mockdata';

@Injectable()
export class LoadDataService {

  public data: ISearchResponse;
  public dataObs: Subject<ISearchResponse> = new Subject<ISearchResponse>();

  constructor() { }

  public onFormSubmit(): void {
    this.dataObs.next(data);
  }

}
