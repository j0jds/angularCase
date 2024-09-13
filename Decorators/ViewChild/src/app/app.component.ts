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

    const btnElement = event.target as HTMLButtonElement;
  
    btnElement.style.backgroundColor = 'orange';
    btnElement.style.color = 'white';
  }

  resetButtons() {
    this.buttonsEl.forEach((btnEl) => {
      console.log(btnEl);
      btnEl.nativeElement.style.backgroundColor = '';
      btnEl.nativeElement.style.color = 'black';
    });
  }

  primeiro() {
    // const primeiro = this.buttonsEl.get(0);

    // const primeiro = this.buttonsEl.find((btnEl) => btnEl.nativeElement.className === 'btn-0');
    // console.log(primeiro); 

    const primeiro =
      this.buttonsEl.toArray()[0];
    console.log(primeiro);
  }
}
