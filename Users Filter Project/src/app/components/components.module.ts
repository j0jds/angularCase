import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  imports: [AngularMaterialModule],
  exports: [UserDetailsComponent, FilterComponent],
  declarations: [UserDetailsComponent, FilterComponent],
})
export class ComponentsModule { 
  
 }
