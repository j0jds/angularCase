import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  getUser() {
    return new Promise<IUser>((resolve, reject) => {
      setTimeout(() => resolve({
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
      }), 3000);
    })
  }

}
