import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EnderecoComponent } from './examplesCase/form-comp-filhos/components/endereco/endereco.component';0
import { FormGroupComponent } from './examplesCase/form-group/form-group.component';
import { FormArrayComponent } from './examplesCase/form-array/form-array.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilderComponent } from './examplesCase/form-builder/form-builder.component';
import { FormControlComponent } from './examplesCase/form-control/form-control.component';
import { FormCompFilhosComponent } from './examplesCase/form-comp-filhos/components/form-comp-filhos.component';
import { FormArrayWithGroupComponent } from './examplesCase/form-array-with-group/form-array-with-group.component';
import { FormBuilderExternoComponent } from './examplesCase/form-builder-externo/form-builder-externo.component';
import { ValidadorAssincronoComponent } from './examplesCase/validador-assincrono/validador-assincrono.component';
import { FormBuilderExternoComServiceComponent } from './examplesCase/form-builder-externo-com-service/form-builder-externo-com-service.component';
import { MarkAsTouchedComponent } from './examplesCase/mark-as-touched/mark-as-touched.component';

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
    FormCompFilhosComponent,
    EnderecoComponent,
    MarkAsTouchedComponent
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
