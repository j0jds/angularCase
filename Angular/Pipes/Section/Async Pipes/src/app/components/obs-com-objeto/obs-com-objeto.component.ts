import { UserService } from '../../services/user.service';
import { IUserResponse } from '../../interfaces/user-response';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obs-com-objeto',
  templateUrl: './obs-com-objeto.component.html',
  styleUrl: './obs-com-objeto.component.scss'
})

export class ObsComObjetoComponent implements OnInit {

  user: IUserResponse = {} as IUserResponse; 

  constructor(private readonly _userService: UserService) {}

  ngOnInit() {
    this._userService.getUserById(1).subscribe((UserResponse) =>  this.user = UserResponse);
  }
}
