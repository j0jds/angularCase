import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormControlComponent } from './examplesCase/form-control/form-control.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { ValidadorAssincronoComponent } from './examplesCase/validador-assincrono/validador-assincrono.component';
import { HttpClientModule } from '@angular/common/http';
import { FormGroupComponent } from './examplesCase/form-group/form-group.component';
import { FormArrayComponent } from './examplesCase/form-array/form-array.component';
import { FormArrayWithGroupComponent } from './examplesCase/form-array-with-group/form-array-with-group.component';
import { FormBuilderComponent } from './examplesCase/form-builder/form-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    FormControlComponent,
    // ValidadorAssincronoComponent,
    FormGroupComponent,
    FormArrayComponent,
    FormArrayWithGroupComponent,
    FormBuilderComponent
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
