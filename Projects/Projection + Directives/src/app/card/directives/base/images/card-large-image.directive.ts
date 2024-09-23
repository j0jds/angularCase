import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-large-image',
  host: {'class': 'ca-c-card__large-image'}
})

export class CardLargeImageDirective { }
