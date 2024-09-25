import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent { 
  user = {
    nome: 'Felipe',
    idade: 26,
    status: 1,
  };
}
