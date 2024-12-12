import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss'
})

export class FormGroupComponent {

  // Num projeto de reactive forms, o formulário SEMPRE deve ser um FormGroup. - Mestre Angular
  pessoaForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  });

  constructor() {
    console.log(this.pessoaForm);
  }

  mostrarValue() {
    console.log(this.pessoaForm.value);
  }

}
