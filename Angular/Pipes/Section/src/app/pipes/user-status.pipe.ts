import { Pipe, PipeTransform } from '@angular/core';
import { UserStatusEnum } from '../app.component';

@Pipe({
  name: 'userStatus'
})

export class UserStatusPipe implements PipeTransform {

  transform(userStatus: number): string {

    if(userStatus === UserStatusEnum.ATIVO) {
      return 'Ativo';
    } else if (userStatus === UserStatusEnum.INATIVO) {
      return 'Inativo';
    } else {
      return 'Inválido';
    }

  }

}
