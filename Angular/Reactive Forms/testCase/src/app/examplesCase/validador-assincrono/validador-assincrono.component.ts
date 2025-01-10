import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserValidatorService } from './user-validator.service';

@Component({
  selector: 'app-validador-assincrono',
  templateUrl: './validador-assincrono.component.html',
  styleUrl: './validador-assincrono.component.scss'
})
export class ValidadorAssincronoComponent {
  nome = new FormControl('', {
    // Por alguma razão, esse _userValidatorService está com erro. No exemplo da aula, esse arquivo não possui nenhum problema com relação a inicialização.
    // asyncValidators: [this._userValidatorService.validate.bind(this._userValidatorService)],
    updateOn: 'blur',
  });

  constructor(
    private readonly _userValidatorService: UserValidatorService
  ) {}
}
  