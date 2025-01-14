import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

// Criação de um validador personalizado. Cabem diferentes tipos de testes para ver maneiras diferentes de como isso pode funcionar.
function testeValidator(): ValidatorFn {
  return (): ValidationErrors | null => {
    console.log('VALIDADOR!!!')
    return null
  }
}
@Component({
  selector: 'app-mark-as-touched',
  templateUrl: './mark-as-touched.component.html',
  styleUrl: './mark-as-touched.component.scss'
})

export class MarkAsTouchedComponent implements OnInit {
  pessoaForm = new FormGroup({
    nome: new FormControl('', [Validators.required, testeValidator()]),
    email: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
    this.pessoaForm.get('nome')?.statusChanges.subscribe((value) => console.log('Status Changes Nome =>', value))

    setTimeout(() => {
      console.log('Touched pessoaForm', this.pessoaForm.touched)
      console.log('Touched nomeControl', this.pessoaForm.get('nome')?.touched);
      console.log('Touched emailControl', this.pessoaForm.get('email')?.touched);
    }, 3000)
  }

  markNomeAsTouched() {
    console.log('markNomeAsTouched');
    // this.pessoaForm.get('nome')?.markAsTouched({ onlySelf: true });
    this.pessoaForm.get('nome')?.markAsTouched();
    // this.pessoaForm.get('email')?.markAsTouched();
  }
}
