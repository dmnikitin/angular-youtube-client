import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, of, from, timer } from 'rxjs';
import { catchError, retry, tap, map, reduce, debounce, pluck, switchMap, toArray, scan, mergeMap } from 'rxjs/operators';
import { ISearchResponse } from '../../youtube/models/search-response.model';
import { ISearchItem } from './../../youtube/models/search-item.model';
// import { data } from '../../../assets/mockdata';
import { environment } from '../../../environments/environment';

@Injectable()
export class LoadDataService {

  private _data: ISearchResponse;

  get data(): ISearchResponse { return this._data; }
  set data(value: ISearchResponse) { this._data = value; }

  public dataObs: Subject<ISearchResponse> = new Subject<ISearchResponse>();

  constructor(private http: HttpClient) { }

  // public onFormSubmit(): void {
  //   this.data = data;
  //   this.dataObs.next(this.data);
  // }

  public getData(query: string): void {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&type=video&key=${environment.apiKey}`;
    if (query.length > 7) {

      this.http.get(url)
        .pipe(

          pluck('items'),
          switchMap((items: []) => from(items)),
          map((item) => item.id.videoId),
          reduce((totalScore, current) => totalScore + ',' + current),
          mergeMap((idString) => {
            const newUrl = `https://www.googleapis.com/youtube/v3/videos?key=${environment.apiKey}&id=${idString}&part=snippet,statistics`;
            return this.http.get(newUrl);
          })
          // debounce(() => timer(10000))
        )
        .subscribe((data: ISearchResponse) => {
          console.log(data);
          this.dataObs.next(data);
        });
    } else {
      console.log('nope');
    }

  }

}

// import { Observable, of, timer } from 'rxjs';
// import { catchError, retry, map, debounce } from 'rxjs/operators';

// public getStuff(p1, area:string, p2:string): Observable<number> {
//    return this.http.get(some_url)
//    .pipe(
//       debounce(() => timer(10000)),
//       catchError(this.handleError)
//    );
// };
