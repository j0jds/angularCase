import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userStatus'
})

export class UserStatusPipe implements PipeTransform {

  transform(userStatus: number): string {

    if(userStatus === 1) {
      return 'Ativo';
    } else if (userStatus === 2) {
      return 'Inativo';
    } else {
      return 'Inválido';
    }

  }

}
