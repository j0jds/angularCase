import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ObsComObjetoComponent } from './components/obs-com-objeto/obs-com-objeto.component';

@NgModule({
  declarations: [
    AppComponent,
    ObsComObjetoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
