import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ng-model-group',
  templateUrl: './ng-model-group.component.html',
  styleUrls: ['./ng-model-group.component.scss']
})

export class NgModelGroupComponent {
  onSubmit(meuForm: NgForm) {
    console.log(meuForm.value);
  }
}
