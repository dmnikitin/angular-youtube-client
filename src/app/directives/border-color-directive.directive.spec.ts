import { BorderColorDirective } from './border-color-directive.directive';
import { ElementRef, Renderer2 } from '@angular/core';
class MockElementRef implements ElementRef {
  public nativeElement: ElementRef;
}
let renderer2: Renderer2;

describe('BorderColorDirective', () => {
  it('should create an instance', () => {
    const directive: BorderColorDirective = new BorderColorDirective(new MockElementRef(), renderer2);
    expect(directive).toBeTruthy();
  });
});
