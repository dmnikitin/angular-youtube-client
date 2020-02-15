import { Component, OnInit } from '@angular/core';
import { ISearchResponse } from '../../models/search-response.model';
import { data } from '../../../assets/mockdata';
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  public searchResponse: ISearchResponse = data;

  constructor() {
  }

  public ngOnInit(): void {
  }

}
