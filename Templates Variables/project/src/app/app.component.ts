import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  clicou(input: HTMLInputElement) {
    console.log(input.value);

    input.value = 'Atualizado';
    
  }
}
