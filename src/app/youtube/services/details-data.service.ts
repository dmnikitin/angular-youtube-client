import { Injectable } from '@angular/core';
import { ISearchItem } from './../models/search-item.model';

@Injectable()
export class DetailsDataService {

  public item: ISearchItem;

  constructor() { }
}
