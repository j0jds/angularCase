import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mark-as-touched',
  templateUrl: './mark-as-touched.component.html',
  styleUrl: './mark-as-touched.component.scss'
})

export class MarkAsTouchedComponent implements OnInit {


  pessoaForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
    setTimeout(() => {
      console.log('Touched pessoaForm', this.pessoaForm.touched)
      console.log('Touched nomeControl', this.pessoaForm.get('nome')?.touched);
      console.log('Touched emailControl', this.pessoaForm.get('email')?.touched);
    }, 1000)
  }

  markNomeAsTouched() {
    console.log('markNomeAsTouched');
    this.pessoaForm.get('nome')?.markAsTouched();
    this.pessoaForm.get('email')?.markAsTouched();
  }

}
