import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-avatar-large',
  standalone: true,
  host: {'class': 'ca-u-card-avatar-large'}
})

export class CardAvatarLargeDirective { }
