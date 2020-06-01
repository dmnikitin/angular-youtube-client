import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject, from, EMPTY } from 'rxjs';
import { catchError, map, reduce, pluck, switchMap } from 'rxjs/operators';
import { ISearchResponse } from '../../youtube/models/search-response.model';
import { ISearchItemInitial } from './../../youtube/models/search-item.model';

@Injectable()
export class LoadDataService {

  private _data: ISearchResponse;
  get data(): ISearchResponse { return this._data; }
  set data(value: ISearchResponse) { this._data = value; }

  public dataObs: Subject<ISearchResponse> = new Subject();
  public searchQuery: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) { }

  public getData(query: string, results: number = 10): Observable<ISearchResponse> {

    const params: HttpParams = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', results.toString())
      .set('q', query)
      .set('type', 'video');

    return this.http.get<ISearchResponse>('/search', { params })
      .pipe(
        pluck('items'),
        switchMap((items: []) => from(items)),
        map((item: ISearchItemInitial) => item.id.videoId),
        reduce((totalStr, current) => totalStr + ',' + current),
        switchMap((idString: string) => this.getDataById(idString)),
        catchError((error) => {
          console.log('error: ', error);
          return EMPTY;
        })
      );
  }

  public getDataById(idString: string): Observable<ISearchResponse> {

    const params: HttpParams = new HttpParams()
      .set('part', 'snippet,statistics')
      .set('id', idString);

    return this.http.get<ISearchResponse>('/videos', { params });
  }
}
