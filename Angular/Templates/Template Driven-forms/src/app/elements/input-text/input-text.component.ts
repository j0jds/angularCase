import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent implements AfterViewInit {
  @ViewChild('meuInputFormControl') inputElFormControl!: NgModel;
  @ViewChild('meuInputFormControl') inputEl!: ElementRef<HTMLInputElement>;

  ngAfterViewInit() {
    console.log('Form Control =>', this.inputElFormControl);
    console.log('Original =>', this.inputEl);
  }

  send() {
    if (this.inputElFormControl.valid && this.inputElFormControl.touched) {
      console.log('Enviado com sucesso!');
    }
  }
}
