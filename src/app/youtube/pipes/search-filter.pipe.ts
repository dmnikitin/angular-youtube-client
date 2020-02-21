import { ISearchItem } from '../models/search-item.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  public transform(items: ISearchItem[], filteringValue: string): ISearchItem[] {
    if (!items || !filteringValue) {
      return items;
    }
    return items.filter((item: ISearchItem) => item.snippet.title.toLowerCase().includes(filteringValue));
  }

}
