import { FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrl: './endereco.component.scss'
})

export class EnderecoComponent {
  @Input ({ required: true }) pessoaForm!: FormGroup;
}
