import { NONE_TYPE } from '@angular/compiler';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  
  @Input({ required: true })
  planType: string = '';

  @Input({ required: true})
  planPrice: number = 0;  

  @Input({ required: true})
  cardStyle: 'orange' | 'purple' = 'orange';

  @Output('buttonClicked')
  buttonClickedEmitt = new EventEmitter<void>();
  onButtonClicked() {
    this.buttonClickedEmitt.emit();
  }

}
