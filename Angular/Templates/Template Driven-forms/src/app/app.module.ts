import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormComponent } from './elements/form/form.component';
import { SelectComponent } from './elements/select/select.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CheckboxComponent } from './elements/checkbox/checkbox.component';
import { FormUserComponent } from './form-with-children/form-user/form-user.component';
import { MainFormComponent } from './form-with-children/main-form/main-form.component';
import { TextareaComponent } from './elements/textarea/textarea.component';
import { InputTextComponent } from './elements/input-text/input-text.component';
import { RadioButtonComponent } from './elements/radio-button/radio-button.component';
import { NgModelGroupComponent } from './elements/ng-model-group/ng-model-group.component';
import { FormProfessionComponent } from './form-with-children/form-profession/form-profession.component';
import { CustomValidatorFormEx1Component } from './custom-validators/synchronous/ex1/custom-validator-form-ex1/custom-validator-form-ex1.component';
import { InvalidTextValidatorDirective } from './custom-validators/synchronous/ex1/directives/invalid-text-validator.directive';
import { CustomValidatorFormEx2Component } from './custom-validators/synchronous/ex2/custom-validator-form-ex2/custom-validator-form-ex2.component';
import { DepartmentQuantityValidatorDirective } from './custom-validators/synchronous/ex2/department-quantity-validator.directive';
import { UserNameValidatorDirective } from './custom-validators/asynchronous/directives/user-name-validator.directive';
import { AsyncCustomValidatorFormComponent } from './custom-validators/asynchronous/async-custom-validator-form/async-custom-validator-form.component';

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
    CustomValidatorFormEx1Component,
    InvalidTextValidatorDirective,
    CustomValidatorFormEx2Component,
    DepartmentQuantityValidatorDirective,
    UserNameValidatorDirective,
    AsyncCustomValidatorFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
