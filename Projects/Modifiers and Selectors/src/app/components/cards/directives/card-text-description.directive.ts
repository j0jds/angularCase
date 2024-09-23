import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-text-description',
  standalone: true,
  host: {'class': 'ca-u-card-text-description'}
})

export class CardTextDescriptionDirective {}
