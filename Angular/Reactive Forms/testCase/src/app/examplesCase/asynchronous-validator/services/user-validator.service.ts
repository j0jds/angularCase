import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { Observable, delay, map, of } from "rxjs";
import { UsersService } from "./";

@Injectable({
    providedIn: 'root',
})
export class UserValidatorService implements AsyncValidator {
    constructor(
        private readonly _usersService: UsersService
    ){}

    validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        if(!control.dirty) {
            return of(null);
        }

        return this._usersService.getUsers().pipe(
            delay(3000),
            map((usersList) => {
                const hasUser = usersList.find((user) => user.name.toLowerCase() === control.value.trim().toLowerCase());

                if(hasUser) {
                    return null;
                }

                return { userValidator: true };
            }),
        );
    }
}
