import { Component } from '@angular/core';
import { PessoaFormController } from './pessoa-form-controller';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-builder-externo',
  templateUrl: './form-builder-externo.component.html',
  styleUrl: './form-builder-externo.component.scss'
})

// Epilef recomendou evitar criar uma classe pra estender a classe principal do seu componente, pois isso torna a manutenção mais difícil. Ele recomenda que, quando necessário, você deve estender a classe que possui uma única funcionalidade e não mais que isso.
export class FormBuilderExternoComponent extends PessoaFormController {

  constructor(
    private readonly _fbMain: FormBuilder
  ) {
    super(_fbMain);
  }
}
