import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { SelectComponent } from './elements/select/select.component';
import { AppRoutingModule } from './app-routing.module';
import { CheckboxComponent } from './elements/checkbox/checkbox.component';
import { TextareaComponent } from './elements/textarea/textarea/textarea.component';
import { InputTextComponent } from './elements/input-text/input-text.component';
import { RadioButtonComponent } from './elements/radio-button/radio-button.component';

@NgModule({
  declarations: [AppComponent, TextareaComponent, InputTextComponent, SelectComponent, RadioButtonComponent, CheckboxComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
