import { Component } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  tipo = 'Teste';
  preco = 100;

  getFullPrice() {
    setTimeout(() => {
      console.log('Set Timeout');
      this.tipo = 'Simples';
    }, 10000);

    return 'R$' + this.preco + ',00/Mês';
  }

}
