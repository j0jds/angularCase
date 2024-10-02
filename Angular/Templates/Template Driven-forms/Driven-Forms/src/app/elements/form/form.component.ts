import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})

export class FormComponent {
  inputText: string = 'SPLASH';
  textarea: string = 'SPLASH';
  select: string = '1';
  radioButton: string = '1';
  checkbox: boolean = true;

  onSubmit(form: NgForm) {
    console.log('onSubmit', form.value);
  }  

  onReset(form: NgForm) {
    console.log(this.select)
    console.log(this.checkbox)
    console.log(this.textarea)
    console.log(this.inputText)
    console.log(this.radioButton)
    console.log('onReset', form.value);

    setTimeout(() => console.log(form.value), 2000)
  }

}
