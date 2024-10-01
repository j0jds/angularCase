import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TextareaComponent } from './elements/textarea/textarea/textarea.component';
import { InputTextComponent } from './elements/input-text/input-text.component';

@NgModule({
  declarations: [AppComponent, TextareaComponent, InputTextComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
