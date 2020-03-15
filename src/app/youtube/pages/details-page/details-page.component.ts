import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { ISearchItem } from './../../models/search-item.model';
import { LoadDataService } from './../../../core/services/load-data.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  private params: string;

  public item: ISearchItem;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loadDataService: LoadDataService
  ) { }

  // public ngOnInit(): void {
  //   if (!this.detailsDataService.item) {
  //     this.router.navigate(['videos']);
  //   }
  //   this.item = this.detailsDataService.item;
  // }
  public redirect(): void {
    console.log(this.route.params);
    console.log(this.params);
    this.router.navigate(['videos']);

  }

  public ngOnInit(): void {

    this.route.queryParams
      .pipe(switchMap((params) => this.loadDataService.getDataById(params.v)))
      .subscribe((data) => {

        this.item = data.items[0];
      });
  }
}

