import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject, from, timer, EMPTY } from 'rxjs';
import { catchError, map, reduce, debounceTime, pluck, switchMap } from 'rxjs/operators';
import { ISearchResponse } from '../../youtube/models/search-response.model';
import { ISearchItem } from './../../youtube/models/search-item.model';

@Injectable()
export class LoadDataService {

  private _data: ISearchResponse;
  private readonly URL: string = 'https://www.googleapis.com/youtube/v3/';

  get data(): ISearchResponse { return this._data; }
  set data(value: ISearchResponse) { this._data = value; }

  public dataObs: Subject<ISearchResponse> = new Subject<ISearchResponse>();
  public searchQuery: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) { }

  public getData(query: string, results: number = 10): void {

    const searchParams: HttpParams = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', results.toString())
      .set('q', query)
      .set('type', 'video');

    this.http.get<ISearchResponse>(`${this.URL}search`, { params: searchParams })
      .pipe(
        pluck('items'),
        switchMap((items: []) => from(items)),
        map((item) => item.id.videoId),
        reduce((totalScore, current) => totalScore + ',' + current),
        switchMap((idString: string) => {
          const videoParams: HttpParams = new HttpParams()
            .set('part', 'snippet,statistics')
            .set('id', idString);
          return this.http.get<ISearchResponse>(`${this.URL}videos`, { params: videoParams });
        }),
        catchError((error) => {
          console.log('error: ', error);
          return EMPTY;
        })
      )
      .subscribe((data: ISearchResponse) => {
        this.dataObs.next(data);
      });

  }
}
