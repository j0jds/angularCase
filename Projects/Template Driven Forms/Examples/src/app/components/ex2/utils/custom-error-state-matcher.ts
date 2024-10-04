import { AbstractControl, FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

export class CustomErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: AbstractControl<any, any> | null, form: FormGroupDirective | NgForm | null): boolean {
        const FORM_IS_SUBMITTED = form && form.submitted;

        const CONTROL_IS_INVALID = control && control.invalid;
        const CONTROL_IS_DIRTY = control && control.dirty;
        const CONTROL_IS_TOUCHED = control && control.touched;

        return !!(CONTROL_IS_INVALID && (CONTROL_IS_DIRTY || CONTROL_IS_TOUCHED || FORM_IS_SUBMITTED));
    }

}