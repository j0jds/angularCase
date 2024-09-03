import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList;
    }, 3000);
  }

  usersList: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;

  onUserSelected(user: IUser) {
    this.userSelected =  user;
    this.showUserDetails = true;
  }

 }
