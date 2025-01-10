import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormGroupComponent } from './examplesCase/form-group/form-group.component';
import { FormArrayComponent } from './examplesCase/form-array/form-array.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilderComponent } from './examplesCase/form-builder/form-builder.component';
import { FormControlComponent } from './examplesCase/form-control/form-control.component';
import { FormCompFilhosComponent } from './examplesCase/form-comp-filhos/form-comp-filhos.component';
import { FormArrayWithGroupComponent } from './examplesCase/form-array-with-group/form-array-with-group.component';
import { FormBuilderExternoComponent } from './examplesCase/form-builder-externo/form-builder-externo.component';
import { ValidadorAssincronoComponent } from './examplesCase/validador-assincrono/validador-assincrono.component';
import { FormBuilderExternoComServiceComponent } from './examplesCase/form-builder-externo-com-service/form-builder-externo-com-service.component';

@NgModule({
  declarations: [
    AppComponent,
    FormControlComponent,
    ValidadorAssincronoComponent,
    FormGroupComponent,
    FormArrayComponent,
    FormArrayWithGroupComponent,
    FormBuilderComponent,
    FormBuilderExternoComponent,
    FormBuilderExternoComServiceComponent,
    FormCompFilhosComponent
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
