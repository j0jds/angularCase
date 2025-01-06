import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss'
})

export class FormBuilderComponent implements OnInit {

  pessoaForm!: FormGroup; 

  // O construtor é utilizado para injetar dependências necessárias no componente.
  constructor(
    private readonly _fb: FormBuilder
  ) { }

  // O formulário é inicializado no ngOnInit para garantir que esteja sincronizado com o ciclo de vida do componente.
  ngOnInit() {
    this.pessoaForm = this._fb.group({
      nome: ['', [Validators.required]], 
      email: this._fb.control('', { validators: [Validators.required] }), 
      endereco: this._fb.group({ 
        rua: ['', [Validators.required]], 
        numero: ['', [Validators.required]] 
      }),
      musicas: this._fb.array([ 
        ['', [Validators.required]],
      ])
    })
  }

}
