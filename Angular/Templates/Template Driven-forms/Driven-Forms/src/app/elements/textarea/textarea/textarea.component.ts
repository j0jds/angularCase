import { Component } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
})

export class TextareaComponent {
  text: string = 'Sou o texto inicial';

  onChange(text: string) {
    this.text = text;
  }

  showText() {
    console.log(this.text);
  }
}
