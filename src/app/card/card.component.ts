import { Component } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  plano = {
    infos: {
      tipo: 'Simples',
      preco: 100,
    },
  };
}
