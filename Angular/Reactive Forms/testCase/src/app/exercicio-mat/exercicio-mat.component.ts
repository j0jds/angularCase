import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exercicio-mat',
  templateUrl: './exercicio-mat.component.html',
  styleUrl: './exercicio-mat.component.scss',
})

export class ExercicioMatComponent {
  pessoaForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

  get nome(): FormControl {
    return this.pessoaForm.get('nome') as FormControl;
  }

  get email(): FormControl {
    return this.pessoaForm.get('email') as FormControl;
  }

  onFormSubmit() {
    if (this.pessoaForm.invalid) {
      console.log('Formulário Invállido!');
      // this.pessoaForm.markAllAsTouched
      Object.keys(this.pessoaForm.controls).forEach((controlKey) => {
        const control = this.pessoaForm.get(controlKey);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    } else {
      console.log('Formulário Enviado! =>', this.pessoaForm.value);
    }
  }
}
