import { Directive } from '@angular/core';

@Directive({
  selector: '[appDescriptionText]',
  host: {'class': 'ca-c-card__description-text'}
})

export class DescriptionTextDirective { }
