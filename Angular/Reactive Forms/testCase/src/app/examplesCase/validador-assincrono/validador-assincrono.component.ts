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
    asyncValidators: [this._userValidatorService.validate.bind(this._userValidatorService)],
    updateOn: 'blur',
  });

  constructor(
    private readonly _userValidatorService: UserValidatorService
  ) {}
}
  