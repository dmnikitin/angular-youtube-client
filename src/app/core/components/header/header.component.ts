import { debounceTime } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadDataService } from '../../services/load-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isSortingBoxOpen: boolean = false;

  constructor(private router: Router, private loadDataService: LoadDataService) { }

  public ngOnInit(): void {
    this.loadDataService.searchQuery
      .pipe(debounceTime(2000))
      .subscribe((query: string) => this.loadDataService.getData(query));
  }

  public updateQuery(query: string): void {
    this.loadDataService.searchQuery.next(query);
  }

  public toggleSortingBoxView(): void {
    this.isSortingBoxOpen = !this.isSortingBoxOpen;
  }

}
