import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component'; 

import { CardsModule } from './cards/cards.module';

// Para que um componente seja referenciado em outro, o nome dele deve estar inserido no array declarations de @NgModule.

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
