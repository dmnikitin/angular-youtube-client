import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { ISearchItem } from '../../models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  @Input() public item: ISearchItem;
  public color: string;

  constructor(private router: Router) {
  }

  public ngOnInit(): void {
  }
  public openDetailsPage(id: string): void {
    this.router.navigate(['/videos', 'watch'], { queryParams: { v: id } });
  }

}
