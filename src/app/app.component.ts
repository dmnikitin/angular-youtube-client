import { Component } from '@angular/core';
import { ISearchResponse } from './models/search-response.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public searchResponse: ISearchResponse;

  public onGetResponse(response: ISearchResponse): void {
    this.searchResponse = response;
    console.log('done', response);
  }

}
