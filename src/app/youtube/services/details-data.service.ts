import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ISearchItem } from './../models/search-item.model';

@Injectable()
export class DetailsDataService {

  public item: ISearchItem;

  constructor() { }
}
