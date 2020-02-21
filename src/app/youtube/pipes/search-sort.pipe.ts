import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '../models/search-item.model';

@Pipe({
  name: 'searchSort'
})
export class SearchSortPipe implements PipeTransform {

  public transform(items: ISearchItem[], sortingValue: string): ISearchItem[] {
    if (!items || !sortingValue) {
      return items;
    }
    if (sortingValue === 'date') {
      return items.sort((first: ISearchItem, second: ISearchItem) => {
        const firstPublished: number = +new Date(first.snippet.publishedAt);
        const secondPublished: number = +new Date(second.snippet.publishedAt);
        return secondPublished - firstPublished;
      });
    }
    return items.sort((first: ISearchItem, second: ISearchItem) => {
      return +second.statistics.viewCount - +first.statistics.viewCount;
    });
  }
}
