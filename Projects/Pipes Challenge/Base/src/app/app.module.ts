import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { StatusPipe } from './pipes/status.pipe';
import { StatusIconPipe } from './pipes/status-icon.pipe';
import { registerLocaleData } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [AppComponent, StatusPipe, StatusIconPipe, FilterPipe],
  imports: [BrowserModule, FormsModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
  ],
  bootstrap: [AppComponent],
})

export class AppModule {}
