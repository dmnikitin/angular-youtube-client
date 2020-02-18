import { Pipe, PipeTransform } from '@angular/core';
import { colors, dateValues } from '../../assets/magic-values';
@Pipe({
  name: 'dateToColor'
})
export class DateToColorPipe implements PipeTransform {

  public transform(value: string): string {
    const { sixMonths, month, week } = dateValues;
    const { red, blue, green, gold, transparent } = colors;
    const published: number = +new Date(value);
    switch (true) {
      case (published < sixMonths): { return red; break; }
      case (published > week): { return blue; break; }
      case (published < week && published > month): { return green; break; }
      case (published < month && published > sixMonths): { return gold; break; }
      default: return transparent;
    }
  }

}
