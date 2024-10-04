import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUser } from 'src/app/interfaces/user/user.interface';

@Component({
  selector: 'app-user-before-and-after-dialog',
  templateUrl: './user-before-and-after-dialog.component.html',
  styleUrls: ['./user-before-and-after-dialog.component.scss']
})
export class UserBeforeAndAfterDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { originalUser: IUser, updatedUser: IUser, }
  ) {}
}
