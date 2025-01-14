import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exercicio-mat',
  templateUrl: './exercicio-mat.component.html',
  styleUrl: './exercicio-mat.component.scss'
})

export class ExercicioMatComponent {

  pessoaForm = new FormGroup({
    nome: new FormControl ('', Validators.required),
    email: new FormControl ('', Validators.required),
  });

  get nome(): FormControl {
    return this.pessoaForm.get('nome') as FormControl;
  }

  get email(): FormControl {
    return this.pessoaForm.get('email') as FormControl;
  }

}
