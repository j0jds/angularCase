import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(userStatus: number): string {
    const statusList: { [key: number]: string } = {
      1: 'Ativo',
      2: 'Inativo'
    };
    
    return statusList[userStatus];
    
  }

}
