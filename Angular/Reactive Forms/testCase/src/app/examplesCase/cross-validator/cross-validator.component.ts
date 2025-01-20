import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cross-validator',
  templateUrl: './cross-validator.component.html',
  styleUrl: './cross-validator.component.scss'
})

export class CrossValidatorComponent {
  pessoaForm =  new FormGroup({
    senha: new FormControl(''),
    confirmacaoSenha: new FormControl(''),
  })
}
