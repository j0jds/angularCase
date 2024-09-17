import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  fontSize: number = 80;
  textColor: 'green' | 'orange' = 'green';
  buttonText: 'Verde' | 'Laranja' = 'Laranja';

  increaseFontSize() {
    this.fontSize = this.fontSize + 10;
    console.log('fontSize');
  }

  decreaseFontSize() {
    this.fontSize = this.fontSize - 20;
    console.log('ABAIXOU!');
  }

toggleFontColor() {
  if (this.textColor === 'green') {
    this.textColor = 'orange';
    this.buttonText = 'Verde';
} else {
    this.textColor = 'green';
    this.buttonText = 'Laranja';
}

}

}
