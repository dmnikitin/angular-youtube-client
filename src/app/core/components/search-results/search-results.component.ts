import { Component, OnInit, Input } from '@angular/core';
import { ISearchResponse } from '../../models/search-response.model';
import { IUserActions } from './../../models/user-actions.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  @Input() public searchResponse: ISearchResponse;
  @Input() public userActions: IUserActions;

  constructor() {
  }

  public ngOnInit(): void {
    this.userActions = { sortingValue: '', filteringValue: '' };
  }

}
