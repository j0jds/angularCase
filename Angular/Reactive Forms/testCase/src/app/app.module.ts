import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormControlComponent } from './examplesCase/form-control/form-control.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { ValidadorAssincronoComponent } from './examplesCase/validador-assincrono/validador-assincrono.component';
import { HttpClientModule } from '@angular/common/http';
import { FormGroupComponent } from './examplesCase/form-group/form-group.component';

@NgModule({
  declarations: [
    AppComponent,
    FormControlComponent,
    // ValidadorAssincronoComponent,
    FormGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
