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
      color = '#A54342';
    } else {

      if (published > month && published < sixMonths) {
        color = '#F2C94D';
      }
      if (published < month) {
        color = '#27AE61';
      }
      if (published < week) {
        color = '#2F80EC';
      }
    }
    return color;
  }

}
