import { Component, ViewChild } from '@angular/core';
import { FilhoComponent } from './filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  @ViewChild('meuInput') 
  meuInputEl!: ElementRef<HTMLInputElement> ;

  @ViewChild('minhaDiv')
  minhaDivEl!: ElementRef<HTMLDivElement>;
  
  updateInputText () {
    console.log(this.meuInputEl);
    this.meuInputEl.nativeElement.value = 'Texto Atualizado!';
  }

  focus() {
    this.meuInputEl.nativeElement.focus();
  }

}