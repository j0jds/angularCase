import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ListComponent } from '../components/list/list.component';
import { CardBodyComponent } from  '../components/card-body/card-body.component';
import { CardHeaderComponent } from '../components/card-header/card-header.component';

@NgModule({
  declarations: [
    CardHeaderComponent,
    CardBodyComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
  ],
})
export class ComponentsModule { }
