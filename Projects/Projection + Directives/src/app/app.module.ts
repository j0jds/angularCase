import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardHeaderDirective } from './card/directives/card-header.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardHeaderDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
