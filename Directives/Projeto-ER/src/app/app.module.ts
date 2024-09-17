import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FocusSecondInput } from './directives/focus-second-input.directive';
import { XSSComponent } from './xss/xss.component';

@NgModule({
  declarations: [
    AppComponent,
    FocusSecondInput,
    XSSComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
