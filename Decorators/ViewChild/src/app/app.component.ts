import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  @ViewChild('meuInput') 
  meuInputEl!: ElementRef<HTMLInputElement> 
  
  updateInputText () {
    console.log(this.meuInputEl);
    this.meuInputEl.nativeElement.value = 'Texto Atualizado!';
  }

  focus() {
    this.meuInputEl.nativeElement.focus();
  }

}