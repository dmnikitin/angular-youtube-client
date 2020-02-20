import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoadDataService } from '../../services/load-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isSortingBoxOpen: boolean = false;

  constructor(private loadDataService: LoadDataService) { }

  public ngOnInit(): void {
  }

  public onFormSubmit(event: Event): void {
    event.preventDefault();
    this.loadDataService.onFormSubmit();
  }

  public toggleSortingBoxView(): void {
    this.isSortingBoxOpen = !this.isSortingBoxOpen;
  }

}
