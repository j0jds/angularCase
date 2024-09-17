import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-xss',
  templateUrl: './xss.component.html',
  styleUrl: './xss.component.scss'
})
export class XSSComponent {

  constructor(private readonly _elRef: ElementRef) {}

  createElement(inputText: string) {
    
    const divEl = document.createElement('div');
  
    divEl.innerHTML = inputText;
  
    this._elRef.nativeElement.appendChild(divEl); 

  }

}
