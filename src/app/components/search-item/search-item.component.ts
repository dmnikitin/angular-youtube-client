import { Component, OnInit } from '@angular/core';
import { ISearchItem } from '../../models/search-item.model';
@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  public item: ISearchItem;

  constructor(item: ISearchItem) {
    this.item = item;
  }

  public ngOnInit(): void {
  }

}
