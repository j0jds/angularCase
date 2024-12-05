import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlComponent } from './examplesCase/form-control/form-control.component';
import { AsynchronousValidatorComponent } from './examplesCase/asynchronous-validator/asynchronous-validator.component';

@NgModule({
  declarations: [
    AppComponent,
    FormControlComponent,
    AsynchronousValidatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
