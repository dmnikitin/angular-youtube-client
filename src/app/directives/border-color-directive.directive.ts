import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBorderColorDirective]'
})
export class BorderColorDirective implements OnInit {

  @Input('appBorderColorDirective') public publishedAt: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  public ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'borderBottom', `1px solid ${this.publishedAt}`);
  }

}
