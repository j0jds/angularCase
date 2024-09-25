import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-description-text',
  host: {'class': 'ca-c-card__description-text'}
})

export class CardDescriptionTextDirective { }
