import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateToColor'
})
export class DateToColorPipe implements PipeTransform {

  public transform(value: string): string {

    let color: string;
    const sixMonths: number = +new Date() - 15768000000;
    const month: number = +new Date() - 2628000000;
    const week: number = +new Date() - 604800000;
    const published: number = +new Date(value);
    if (published > sixMonths) {
      color = 'red';
    } else {

      if (published > month && published < sixMonths) {
        color = 'gold';
      }
      if (published < month) {
        color = 'green';
      }
      if (published < week) {
        color = 'blue';
      }
    }
    return color;
  }

}
