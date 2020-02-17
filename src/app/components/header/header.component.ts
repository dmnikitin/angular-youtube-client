import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ISearchResponse } from '../../models/search-response.model';
import { data } from '../../../assets/mockdata';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() public dataLoaded: EventEmitter<ISearchResponse> = new EventEmitter();
  public isSortingBoxOpen: boolean = false;
  public loadedData: ISearchResponse = data;

  constructor() { }

  public ngOnInit(): void {
  }

  public onFormSubmit(event: Event): void {
    event.preventDefault();
    this.dataLoaded.emit(this.loadedData);
  }

  public toggleSortingBoxView(): void {
    this.isSortingBoxOpen = !this.isSortingBoxOpen;
  }

}
