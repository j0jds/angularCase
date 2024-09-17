import { Component } from '@angular/core';

@Component({
  selector: 'app-xss',
  templateUrl: './xss.component.html',
  styleUrl: './xss.component.scss'
})
export class XSSComponent {

  createElement(inputText: string) {
    console.log(inputText); 

  }

}
