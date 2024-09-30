import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusIcon'
})

export class StatusIconPipe implements PipeTransform {

  transform(userStatus: number): string {
    const iconsList: { [key: number]: string } = {
      1: 'assets/icons/active-icon.png',
      2: 'assets/icons/inactive-icon.png',
    };

    return iconsList[userStatus];

  }

}
