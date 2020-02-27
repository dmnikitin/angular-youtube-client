import { Pipe, PipeTransform } from '@angular/core';
import { numbers } from '../../../assets/magic-values';

@Pipe({
  name: 'countTrim'
})
export class CountTrimPipe implements PipeTransform {

  public transform(value: string): string {
    let numberVal: number = +value;
    switch (true) {
      case (numberVal < numbers.thousand): {
        return value;
      }
      case (numberVal >= numbers.thousand && numberVal < numbers.million): {
        return (Math.floor(numberVal / numbers.thousand)) + 'k';
      }
      case (numberVal >= numbers.million && numberVal < numbers.billion): {
        return (Math.floor(numberVal / numbers.million)) + 'm';
      }
      case (numberVal > numbers.billion): {
        return (Math.floor(numberVal / numbers.billion)) + 'b';
      }
      default: return value;
    }
  }
}
