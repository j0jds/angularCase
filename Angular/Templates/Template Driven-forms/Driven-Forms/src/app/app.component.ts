import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent { 
  nome: string = 'Joel';

  onChange(text: string) {
    console.log(text);

  }

  show() {
    console.log(this.nome)
  }

}
