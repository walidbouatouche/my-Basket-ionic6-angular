import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[changeText]'
})
//https://angular.io/guide/structural-directives
export class DirectiveDirective {
  constructor(public Element: ElementRef) {
    console.log(Element);
    Element.nativeElement.innerText = " Walid mohamed text";
  }
  @HostListener('mouseleave') onMouseLeaver() {
    this.Element.nativeElement.stylebackgroundColor = "red";

  }

}
