import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ISearchItem } from './../../models/search-item.model';
import { LoadDataService } from './../../../core/services/load-data.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  public item: ISearchItem;
  public videoLink: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loadDataService: LoadDataService
  ) { }

  public redirect(): void {
    this.router.navigate(['videos']);
  }

  public getIframeURL(): string {
    return this.videoLink;
  }

  public ngOnInit(): void {
    this.route.queryParams
      .pipe(switchMap((params) => this.loadDataService.getDataById(params.v)))
      .subscribe((data) => {
        this.item = data.items[0];
        this.videoLink = `https://www.youtube.com/embed/${this.item.id}`;
      });
  }
}
