import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('meuInputFormControl') inputElFormControl!: NgModel;
  @ViewChild('meuInputFormControl') inputEl!: ElementRef<HTMLInputElement>;

  ngAfterViewInit() {
    console.log('Form Control =>', this.inputElFormControl);
    console.log('Original =>', this.inputEl);
  }

  send() {
    if(this.inputElFormControl.valid && this.inputElFormControl.touched) {
      console.log('Enviado com sucesso!');
    }
  }

}
