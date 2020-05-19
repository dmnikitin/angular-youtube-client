import { Component, OnInit } from '@angular/core';
import { UserActionsService } from './../../services/user-actions.service';
import { ISortingArrow } from './../../models/sorting-arrow.model';

@Component({
  selector: 'app-sorting-box',
  templateUrl: './sorting-box.component.html',
  styleUrls: ['./sorting-box.component.scss']
})
export class SortingBoxComponent implements OnInit {

  public sortingArrowShow: ISortingArrow = { date: true, views: false };
  public filteringValue: string;

  constructor(public userActionsService: UserActionsService) { }

  public ngOnInit(): void {
  }

  public sortByDate(isSortingByDate: boolean): void {
    this.sortingArrowShow = { date: isSortingByDate, views: !isSortingByDate };
    this.userActionsService.sortingValueUpdated(isSortingByDate);
  }
  public filterBy(filteringValue: string): void {
    this.userActionsService.filteringValueUpdated(filteringValue);
  }
}
