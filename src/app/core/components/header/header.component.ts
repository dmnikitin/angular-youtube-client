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
  }

  public onFormSubmit(event: Event): void {
    event.preventDefault();
    this.loadDataService.onFormSubmit();
    this.router.navigate(['videos']);
  }

  public toggleSortingBoxView(): void {
    this.isSortingBoxOpen = !this.isSortingBoxOpen;
  }

}
