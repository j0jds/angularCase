import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUserResponse } from '../interfaces/user-response';
import { UsersListResponse } from '../types/users-list-response.type';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    private readonly _http: HttpClient
  ) {}

  getUsers(): Observable<UsersListResponse>{
    // return of([{
    //   "id": 1,
    //   "name": "Leanne Graham",
    //   "username": "Bret",
    //   "email": "Sincere@april.biz",
    //   "address": {
    //     "street": "Kulas Light",
    //     "suite": "Apt. 556",
    //     "city": "Gwenborough",
    //     "zipcode": "92998-3874",
    //     "geo": {
    //       "lat": "-37.3159",
    //       "lng": "81.1496"
    //     }
    //   },
    //   "phone": "1-770-736-8031 x56442",
    //   "website": "hildegard.org",
    //   "company": {
    //     "name": "Romaguera-Crona",
    //     "catchPhrase": "Multi-layered client-server neural-net",
    //     "bs": "harness real-time e-markets"
    //   }
    // }]);

    return this._http.get<UsersListResponse>('https://jsonplaceholder.typicode.com/users'); 
  
  }

  getUserById(userId: number): Observable<IUserResponse> {
    return this._http.get<IUserResponse>(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }

}
 