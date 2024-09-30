import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userStatusImage'
})
export class UserStatusImagePipe implements PipeTransform {
  transform(userStatus: number): string {
    console.log('UserStatusImagePipe');

    const statusImages: { [key:number]: string } = {
      1: 'assets/icons/active-user-icon.png',
      2: 'assets/icons/inactive-user-icon.png',
    };

    return statusImages[userStatus];
  }
}
