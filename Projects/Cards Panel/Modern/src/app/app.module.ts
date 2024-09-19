import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// ---------------------------------------------------------------------------------------------------//
import { AppComponent } from './app.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { CardLineComponent } from './components/card-line/card-line.component';
import { DebitCardComponent } from './components/debit-card/debit-card.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { BalanceCardComponent } from './components/balance-card/balance-card.component';
import { ClientInfosCardComponent } from './components/client-infos-card/client-infos-card.component';
import { CardTitleComponent } from './components/card-title/card-title.component';

@NgModule({
  declarations: [
    AppComponent,
    CardItemComponent,
    CardLineComponent,
    DebitCardComponent,
    CreditCardComponent,
    BalanceCardComponent,
    ClientInfosCardComponent,
    CardTitleComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
