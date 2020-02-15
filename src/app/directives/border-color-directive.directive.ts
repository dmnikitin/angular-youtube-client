import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBorderColorDirective]'
})
export class BorderColorDirective implements OnInit {

  @Input('appBorderColorDirective') public publishedAt: string;
  public color: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  public ngOnInit(): void {
    this.dateToColor();
    this.renderer.setStyle(this.elementRef.nativeElement, 'borderBottom', `1px solid ${this.color}`);
  }

  public dateToColor(): void {
    const sixMonths: number = +new Date() - 15768000000;
    const month: number = +new Date() - 2628000000;
    const week: number = +new Date() - 604800000;
    const published: number = +new Date(this.publishedAt);
    if (published > sixMonths) {
      this.color = 'red';
    } else {
      if (published < month) {
        this.color = 'green';
      }
      if (published < week) {
        this.color = 'blue';
      }
    }
    // this.color = getColor(new Date())
  }
}
