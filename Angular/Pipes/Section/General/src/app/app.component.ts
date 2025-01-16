import { Component } from '@angular/core';

export enum UserStatusEnum {
  ATIVO = 1,
  INATIVO = 2,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent { 
  user = {
    nome: 'João',
    idade: 26,
    status: 1,
  };
}
