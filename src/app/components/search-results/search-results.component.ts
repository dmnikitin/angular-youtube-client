import { Component, OnInit, Input } from '@angular/core';
import { ISearchResponse } from '../../models/search-response.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  @Input() public searchResponse: ISearchResponse;

  constructor() {
  }

  public ngOnInit(): void {
  }

}
