import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { map, Observable } from "rxjs";
import { UsersService } from "./users.service";

@Injectable ({
    providedIn: 'root'
})

export class UserValidatorService implements AsyncValidator {
    constructor(
        private readonly _usersService: UsersService
    ){}
    validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        return this._usersService.getUsers().pipe(
            map((usersList) => {
                const hasUser = usersList.find((user) => user.name.toLowerCase() === control.value.trim().toLowerCase());

                if (hasUser) {
                    return null;
                }

                return { userValidator: true };
            }),
        );
    }
}