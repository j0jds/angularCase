import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// --------------------------------------------------------------------------------------------------- //
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { CardLineComponent } from './components/card-line/card-line.component';
import { CardTitleComponent } from './components/card-title/card-title.component';
import { DebitCardComponent } from './components/debit-card/debit-card.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { CardHeaderDirective } from './components/card/directives/card-header.directive';
import { BalanceCardComponent } from './components/balance-card/balance-card.component';
import { CardContentDirective } from './components/card/directives/card-content.directive';
import { ClientInfosCardComponent } from './components/client-infos-card/client-infos-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardItemComponent,
    CardLineComponent,
    CardTitleComponent,
    DebitCardComponent,
    CreditCardComponent,
    CardHeaderDirective,
    BalanceCardComponent,
    CardContentDirective,
    ClientInfosCardComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
