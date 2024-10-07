import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.scss'
})

export class FormControlComponent implements OnInit {

  nome = new FormControl('');

  ngOnInit() {
    console.log(this.nome);
  }

}
