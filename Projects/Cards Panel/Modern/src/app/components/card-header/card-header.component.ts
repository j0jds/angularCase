import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrl: './card-header.component.scss'
})
export class CardHeaderComponent {

@Input({ required: true })
headerType: string = '';

@Input({ required: true })
headerStyle: 'orange' | 'cyan' = 'orange';

}
