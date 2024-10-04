import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatInputModule } from '@angular/material/input';
import { Ex1Component } from './components/ex1/ex1.component';
import { Ex2Component } from './components/ex2/ex2.component';
import { EmailValidatorDirective } from './components/ex2/directives/email-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    Ex1Component,
    Ex2Component,
    EmailValidatorDirective,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatInputModule,
    AppRoutingModule,
    MatFormFieldModule,
    BrowserAnimationsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
