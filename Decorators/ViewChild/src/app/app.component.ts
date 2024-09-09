import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  buttonsList = [
    'Botão 1',
    'Botão 2',
    'Botão 3',
  ];
}
