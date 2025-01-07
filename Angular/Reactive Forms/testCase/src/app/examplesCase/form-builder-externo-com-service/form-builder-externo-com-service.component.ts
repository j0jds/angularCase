import { Component } from '@angular/core';
import { PessoaFormControllerService } from './pessoa-form-controller.service';

@Component({
  selector: 'app-form-builder-externo-com-service',
  templateUrl: './form-builder-externo-com-service.component.html',
  styleUrl: './form-builder-externo-com-service.component.scss'
})

export class FormBuilderExternoComServiceComponent {
  constructor(
    public readonly _pessoaFormControllerService: PessoaFormControllerService
  ) {}
  
  onFormSubmit() {
    console.log('AI AI AI')
  }
}
