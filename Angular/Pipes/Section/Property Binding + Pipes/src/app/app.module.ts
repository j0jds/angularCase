import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StatusPipe } from './pipes/status.pipe';
import { UserStatusImagePipe } from './pipes/user-status-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StatusPipe,
    UserStatusImagePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
