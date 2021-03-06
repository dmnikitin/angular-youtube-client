import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '../models/search-item.model';

@Pipe({
  name: 'searchSort'
})
export class SearchSortPipe implements PipeTransform {

  public transform(items: ISearchItem[], sortingValue: boolean, isAscending: boolean): ISearchItem[] {

    if (!items) { return items; }
    if (sortingValue) {
      return items.sort((first: ISearchItem, second: ISearchItem) => {
        const firstPublished: number = +new Date(first.snippet.publishedAt);
        const secondPublished: number = +new Date(second.snippet.publishedAt);
        return isAscending ? secondPublished - firstPublished : firstPublished - secondPublished;
      });
    }
    return items.sort((first: ISearchItem, second: ISearchItem) => {
      return isAscending
        ? (+second.statistics.viewCount - +first.statistics.viewCount)
        : (+first.statistics.viewCount - +second.statistics.viewCount);
    });
  }
}
