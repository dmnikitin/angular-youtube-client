import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sorting-box',
  templateUrl: './sorting-box.component.html',
  styleUrls: ['./sorting-box.component.scss']
})
export class SortingBoxComponent implements OnInit {

  @Output() public sortingValue: EventEmitter<string> = new EventEmitter();
  @Output() public filteringValue: EventEmitter<string> = new EventEmitter();

  constructor() { }

  public ngOnInit(): void {
  }

  public sortBy(value: string): void {
    this.sortingValue.emit(value);
  }
  public filterBy(value: string): void {
    this.filteringValue.emit(value);
  }

}
