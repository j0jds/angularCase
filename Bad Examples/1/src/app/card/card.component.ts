import { Component, ViewEncapsulation } from '@angular/core';

interface IPlano {
  infos: IInfos;
}

interface IInfos {
  tipo: string;
  preco: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class CardComponent {
  plano: IPlano = {
    infos: {
      tipo: 'Simples',
      preco: 100,
    }
  };
}
