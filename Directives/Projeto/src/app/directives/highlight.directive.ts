import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.background-color') bgColor = 'transparent';

  @HostListener('mouseover') onMouseOver () {
    this.bgColor = 'red';
  }

  @HostListener('mouseout') onMouseOut () {
    this.bgColor = 'transparent';
  }

}
