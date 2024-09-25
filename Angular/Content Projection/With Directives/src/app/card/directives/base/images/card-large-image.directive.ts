import { Directive } from '@angular/core';

@Directive({
  selector: '[appCardLargeImage]',
  host: {'class': 'ca-c-card__large-image'}
})

export class CardLargeImageDirective { }
