import { ISearchItem } from './../../models/search-item.model';
import { Component, OnInit } from '@angular/core';
import { DetailsDataService } from '../../services/details-data.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  public item: ISearchItem;

  constructor(public detailsDataService: DetailsDataService) { }

  public ngOnInit(): void {
    this.item = this.detailsDataService.item;
  }

}
