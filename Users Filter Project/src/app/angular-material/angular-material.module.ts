import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [MatListModule, MatDividerModule],
  exports: [MatListModule, MatDividerModule],
})
export class AngularMaterialModule {}
