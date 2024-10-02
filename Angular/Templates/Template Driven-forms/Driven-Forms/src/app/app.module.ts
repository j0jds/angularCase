import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormComponent } from './elements/form/form.component';
import { SelectComponent } from './elements/select/select.component';
import { AppRoutingModule } from './app-routing.module';
import { CheckboxComponent } from './elements/checkbox/checkbox.component';
import { FormUserComponent } from './elements/form-with-children/form-user/form-user.component';
import { MainFormComponent } from './elements/form-with-children/main-form/main-form.component';
import { TextareaComponent } from './elements/textarea/textarea.component';
import { InputTextComponent } from './elements/input-text/input-text.component';
import { RadioButtonComponent } from './elements/radio-button/radio-button.component';
import { NgModelGroupComponent } from './elements/ng-model-group/ng-model-group.component';
import { FormProfessionComponent } from './elements/form-with-children/form-profession/form-profession.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SelectComponent,
    CheckboxComponent,
    FormUserComponent,
    MainFormComponent,
    TextareaComponent,
    InputTextComponent,
    RadioButtonComponent,
    NgModelGroupComponent,
    FormProfessionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
