import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appDepartmentQuantityValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DepartmentQuantityValidatorDirective,
      multi: true,
    },
  ],
})

export class DepartmentQuantityValidatorDirective implements Validator {
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    console.log('control', control);

    return null;
  }
}
