import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JsonComponent } from './json/json.component';
import { SliceComponent } from './slice/slice.component';
import { AppRoutingModule } from './app-routing.module';
import { LowercaseComponent } from './lowercase/lowercase.component';
import { TitlecaseComponent } from './titlecase/titlecase.component';
import { UppercaseComponent } from './uppercase/uppercase.component';

@NgModule({
  declarations: [
    AppComponent,
    JsonComponent,
    SliceComponent,
    LowercaseComponent,
    TitlecaseComponent,
    UppercaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
