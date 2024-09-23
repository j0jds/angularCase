import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-avatar-small',
  standalone: true,
  host: {'class': 'ca-u-card-avatar-small'}
})

export class CardAvatarSmallDirective { }