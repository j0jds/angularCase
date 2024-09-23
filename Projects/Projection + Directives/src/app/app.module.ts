import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardHeaderDirective } from './card/directives/base/card-header.directive';
import { CardContentDirective } from './card/directives/base/card-content.directive';
import { CardMainTextDirective } from './card/directives/base/texts/card-main-text.directive';
import { CardDescriptionTextDirective } from './card/directives/base/texts/card-description-text.directive';
import { CardSubTextDirective } from './card/directives/base/texts/card-sub-text.directive';
import { CardSmallImageDirective } from './card/directives/base/images/card-small-image.directive';
import { CardLargeImageDirective } from './card/directives/base/images/card-large-image.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardHeaderDirective,
    CardContentDirective,
    CardMainTextDirective,
    CardDescriptionTextDirective,
    CardSubTextDirective,
    CardSmallImageDirective,
    CardLargeImageDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
