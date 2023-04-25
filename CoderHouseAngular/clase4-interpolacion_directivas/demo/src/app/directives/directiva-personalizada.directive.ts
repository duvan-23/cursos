import { Directive,Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectivaPersonalizada]'
})
export class DirectivaPersonalizadaDirective {

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {
    renderer.setStyle(elementRef.nativeElement, 'background-color','#d1d1d1');
  }

}
