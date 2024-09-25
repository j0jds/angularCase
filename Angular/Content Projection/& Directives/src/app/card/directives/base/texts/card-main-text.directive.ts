import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-main-text',
  host: {'class': 'ca-c-card__main-text'}
})

export class CardMainTextDirective { }
