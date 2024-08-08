import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
    inputText = "Texto Inicial Alterado";
    inputType = "text";
    isDisabled = true;

  enableInput() {

    this.isDisabled = false;

  }

  disableInput() {

    this.isDisabled = true;

  }

  setPasswordTypeInput() {

    this.inputType = 'password';

  }

  setTextTypeInput() {

    this.inputType = 'text';

  }

  handleInputKeyup(event: any) {

    console.log(event);

  }

}
