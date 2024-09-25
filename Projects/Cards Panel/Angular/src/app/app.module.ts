import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// --------------------------------------------------------------------------------------------------- //
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CardLineComponent } from './components/card-line/card-line.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { CardTitleComponent } from './components/card-title/card-title.component';
import { DebitCardComponent } from './components/debit-card/debit-card.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { CardHeaderDirective } from './components/card/directives/base/card-header.directive';
import { CardContentDirective } from './components/card/directives/base/card-content.directive';
import { BalanceCardComponent } from './components/balance-card/balance-card.component';
import { CardTitleTextDirective } from './components/card/directives/texts/card-title-text.directive';
import { CardMediumIconDirective } from './components/card/directives/icons/card-medium-icon.directive';
import { ClientInfosCardComponent } from './components/client-infos-card/client-infos-card.component';
import { DescriptionTextDirective } from './components/card/directives/texts/description-text.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardLineComponent,
    CardItemComponent,
    CardTitleComponent,
    DebitCardComponent,
    CreditCardComponent,
    CardHeaderDirective,
    CardContentDirective,
    BalanceCardComponent,
    CardTitleTextDirective,
    CardMediumIconDirective,
    ClientInfosCardComponent,
    DescriptionTextDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
