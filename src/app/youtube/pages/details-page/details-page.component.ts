import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISearchItem } from './../../models/search-item.model';
import { DetailsDataService } from '../../services/details-data.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  public item: ISearchItem;

  constructor(public router: Router, public detailsDataService: DetailsDataService) { }

  public ngOnInit(): void {
    if (!this.detailsDataService.item) {
      this.router.navigate(['']);
    }
    this.item = this.detailsDataService.item;
  }

}
