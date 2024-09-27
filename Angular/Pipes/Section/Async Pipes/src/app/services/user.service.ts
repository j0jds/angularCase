import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUserResponse } from '../interfaces/user-response';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    private readonly _http: HttpClient
  ) { }

  getUserById(userId: number): Observable<IUserResponse> {
    return this._http.get<IUserResponse>(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }

}
 