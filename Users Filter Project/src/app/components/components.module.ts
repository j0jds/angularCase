import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  imports: [AngularMaterialModule],
  exports: [UserDetailsComponent],
  declarations: [UserDetailsComponent],
})
export class ComponentsModule { 
  
 }
