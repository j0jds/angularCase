import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})

export class FormComponent implements AfterViewInit {
  inputText: string = 'SPLASH';
  textarea: string = 'SPLASH';
  select: string = '1';
  radioButton: string = '1';
  checkbox: boolean = true;

  @ViewChild('meuForm') meuForm!: NgForm;
  @ViewChild('meuInput') meuInput!: NgModel;

  ngAfterViewInit() {
    this.meuForm.valueChanges?.subscribe(
      (value: any) => {
        console.log('Form change', value);
      }
    );

    this.meuInput.valueChanges?.subscribe((value: string) => {
      console.log('Input Changes')
    });

  }

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
