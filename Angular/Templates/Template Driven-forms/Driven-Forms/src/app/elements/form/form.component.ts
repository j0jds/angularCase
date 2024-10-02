import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})

export class FormComponent implements AfterViewInit {
  @ViewChild('meuForm') form!: NgForm;

  ngAfterViewInit() {
    console.log(this.form);
  }

}
