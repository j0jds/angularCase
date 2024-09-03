import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  displayedColumns: string[] = ['name','date','status'];
  @Input({ required: true }) usersList: IUser[] = [];
//Daqui.
@Output('userSelected') userSelectedEmitt = new EventEmitter<IUser>();
// Nesse caso a tipagem do método userSelectedEmitt foi o IUser (a interface de usuário que eu criei anteriormente).
// Esse já foi um exemplo usado em outras ocasiões, mas achei bom tomar nota disso nesse momento.

  onUserSelected(user: IUser) {
    console.log('user', user);
    this.userSelectedEmitt.emit(user); //Até aqui.
  }
}
