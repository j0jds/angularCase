import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from '../app/directives/highlight.directive';
import { DisabledDirective } from '../app/directives/disabled.directive';
import { StyleDirective } from './directives/style.directive';
import { ClassDirective } from './directives/class.directive';
import { ListenerDirective } from './directives/listener.directive';
import { InputBackgroundDirective } from './directives/input-background.directive';
import { FocusSecondInput } from './directives/focus-second-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    DisabledDirective,
    StyleDirective, 
    ClassDirective,
    ListenerDirective,
    InputBackgroundDirective,
    FocusSecondInput
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
