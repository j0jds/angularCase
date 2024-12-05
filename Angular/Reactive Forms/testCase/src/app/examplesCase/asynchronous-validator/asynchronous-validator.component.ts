import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-asynchronous-validator',
  templateUrl: './asynchronous-validator.component.html',
  styleUrl: './asynchronous-validator.component.scss'
})

export class AsynchronousValidatorComponent {
  nome = new FormControl('');
}
