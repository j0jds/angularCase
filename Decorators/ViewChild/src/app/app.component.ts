import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

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

  @ViewChildren('meuButton')
  buttonsEl!: QueryList<ElementRef<HTMLButtonElement>>;

  ngAfterViewInit() {
    console.log(this.buttonsEl);
  }

  changeColor(event: Event){
    console.log(event);
  }

}
