import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms"

export function invalidTextValidator(invalidText: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        console.log('control =>', control);

        const hasInvalidText = control.value.includes(invalidText);
        return hasInvalidText ? { invalidText: 'Possui texto inválido.'} : null;
    } 
}   