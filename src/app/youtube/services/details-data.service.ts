import { Injectable } from '@angular/core';
import { ISearchItem } from './../models/search-item.model';

@Injectable()
export class DetailsDataService {

  private _item: ISearchItem;
  get item(): ISearchItem {
    return this._item;
  }
  set item(item: ISearchItem) {
    this._item = item;
  }

  constructor() { }
}
