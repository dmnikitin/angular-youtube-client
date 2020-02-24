import { Component, OnInit } from '@angular/core';
import { UserActionsService } from './../../services/user-actions.service';

@Component({
  selector: 'app-sorting-box',
  templateUrl: './sorting-box.component.html',
  styleUrls: ['./sorting-box.component.scss']
})
export class SortingBoxComponent implements OnInit {

  constructor(private userActionsService: UserActionsService) { }

  public ngOnInit(): void {
  }

  public sortBy(sortingValue: HTMLInputElement): void {
    this.userActionsService.sortingValueUpdated(sortingValue.textContent);
  }
  public filterBy(filteringValue: string): void {
    this.userActionsService.filteringValueUpdated(filteringValue);
  }

}
