import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-text-subtitle',
  standalone: true,
  host: {'class': 'ca-u-card-text-subtitle'}
})

export class CardTextSubtitleDirective {}
