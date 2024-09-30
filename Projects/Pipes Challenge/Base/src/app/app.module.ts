import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StatusPipe } from './pipes/status.pipe';
import { StatusIconPipe } from './pipes/status-icon.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StatusPipe,
    StatusIconPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
