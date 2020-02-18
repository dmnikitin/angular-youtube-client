import { Component, OnInit, Output, EventEmitter } from '@angular/core';

interface IUserActions {
  sortingValue: string;
  filteringValue: string;
}
@Component({
  selector: 'app-sorting-box',
  templateUrl: './sorting-box.component.html',
  styleUrls: ['./sorting-box.component.scss']
})
export class SortingBoxComponent implements OnInit {

  @Output() public userActionsUpdated: EventEmitter<IUserActions> = new EventEmitter();
  public sortingValue: string = '';
  public filteringValue: string = '';

  constructor() { }

  public ngOnInit(): void {
  }

  public sortBy(value: HTMLInputElement): void {
    this.sortingValue = value.textContent;
    this.userActionsUpdated.emit({ sortingValue: this.sortingValue, filteringValue: this.filteringValue });
  }
  public filterBy(value: string): void {
    this.filteringValue = value;
    this.userActionsUpdated.emit({ sortingValue: this.sortingValue, filteringValue: this.filteringValue });
  }

}
