import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  imports: [AngularMaterialModule, CommonModule],
  exports: [UserDetailsComponent, FilterComponent, CommonModule, UsersListComponent],
  declarations: [UserDetailsComponent, FilterComponent, UsersListComponent],
})
export class ComponentsModule { 
  
 }
