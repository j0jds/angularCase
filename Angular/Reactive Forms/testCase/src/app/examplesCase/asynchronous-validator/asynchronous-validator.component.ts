import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserValidatorService } from './services/user-validator.service';

@Component({
  selector: 'app-asynchronous-validator',
  templateUrl: './asynchronous-validator.component.html',
  styleUrl: './asynchronous-validator.component.scss'
})

export class AsynchronousValidatorComponent {
  nome = new FormControl('', {
    asyncValidators: [this._userValidatorService.validate.bind(this._userValidatorService)]
    // Observar quais os erros em questão.
  });

  constructor(
    private readonly _userValidator: UserValidatorService
  ) {}

}
