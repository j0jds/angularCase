import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [AngularMaterialModule, CommonModule],
  exports: [UserDetailsComponent, FilterComponent, CommonModule],
  declarations: [UserDetailsComponent, FilterComponent],
})
export class ComponentsModule { 
  
 }
