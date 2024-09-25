import { Directive } from '@angular/core';

@Directive({
  selector: '[appCardSmallImage]',
  host: {'class': 'ca-c-card__small-image'}
})

export class CardSmallImageDirective { }
