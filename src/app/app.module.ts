import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardRoxoComponent } from './card-roxo/card-roxo.component';
import { CardButtonComponent } from './card-button/card-button.component';
import { CardRoxoButtonComponent } from './card-roxo-button/card-roxo-button.component';
import { CardsComponent } from './cards/cards.component';


// Para que um componente seja referenciado em outro, o nome dele deve estar inserido no array declarations de @NgModule.

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardRoxoComponent,
    CardButtonComponent,
    CardRoxoButtonComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
