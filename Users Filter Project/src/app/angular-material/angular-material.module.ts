import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [MatListModule, MatDividerModule, FormsModule, MatFormFieldModule, MatInputModule],
  exports: [MatListModule, MatDividerModule, FormsModule, MatFormFieldModule, MatInputModule],
})
export class AngularMaterialModule {}
