import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTrim'
})
export class TextTrimPipe implements PipeTransform {
  public transform(input: string, length: number): string {
    const addition: string = input.length > length ? '...' : '';
    return input.substring(0, length) + addition;
  }
}
