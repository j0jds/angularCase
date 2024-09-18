import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { CardBodyComponent } from './components/card-body/card-body.component';

@NgModule({
  declarations: [
    AppComponent,
    CardHeaderComponent,
    CardBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
