import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

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
    endereco: new FormGroup({
      rua: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required]), 
    }),
  }, {
    updateOn: 'submit',
  });

  constructor() {
    console.log(this.pessoaForm);
    console.log(this.pessoaForm.get('nome'));

    this.pessoaForm.valueChanges.subscribe((value) => console.log('valueChanges => Pessoa Form', value))
  }

  get nome(): FormControl {
    return this.pessoaForm.get('nome') as FormControl;
  }

  get email(): FormControl {
    return this.pessoaForm.get('email') as FormControl;
  }

  mostrarValue() {
    console.log(this.pessoaForm.value);
  }
  
  onFormSubmit() {
    console.log(this.pessoaForm.value);
  }

  alteracaoTotal() {
    console.log('Alteração Total!')
    this.pessoaForm.setValue({
      nome: 'Nome Novo',
      email: 'Email Novo',
      endereco: {
        rua: 'Rua Nova',
        numero: 'Número Novo'
      }
    })
  }

  alteracaoParcial() {
    console.log('Alteração Parcial!')
    this.pessoaForm.patchValue({
      nome: 'Nome Novo',
      endereco: {
        rua: 'Rua Nova',
      }
    })
  }
}
