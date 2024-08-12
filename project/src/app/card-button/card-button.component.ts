import { booleanAttribute, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.scss']
})
export class CardButtonComponent {

  propTest: boolean = false;

  @Input({ transform: booleanAttribute }) buttonDisabled: boolean = false;

  @Output('buttonClick') buttonClickEmitter = new EventEmitter<boolean>();

  onButtonClick() {
    console.log('CLICOU');

    this.buttonClickEmitter.emit(true);
  }

}