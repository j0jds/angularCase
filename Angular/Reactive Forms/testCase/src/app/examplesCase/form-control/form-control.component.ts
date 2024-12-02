import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.scss'
})

export class FormControlComponent implements OnInit {

  // nome = new FormControl('Inicial', [Validators.required])

  // nome = new FormControl('Inicial', { nonNullable: true, validators: [Validators.required]});
  /* Aqui o FormControl recebe um nonNullable que faz com que ele seja válido ainda que seja untouched e não seja dirty. Ao abrir um [] torna-se possível passar mais de um validador para o validators, enquanto nesse caso foi passado apenas um que é o required. **/
  
  nome = new FormControl('Inicial', [Validators.required, Validators.minLength(6)]);
  // Aqui o FormControl recebe um validators de minLength com pelo menos 6 caracteres. Se tiver menos que 6, então ele retorna falso.
  
  // nome = new FormControl('Inicial', {nonNullable: true, validators: [Validators.required], updateOn: "blur"});
  
  ngOnInit() {
    console.log(this.nome);

    this.nome.valueChanges.subscribe(result => console.log('valueChanges: ', result));
    this.nome.statusChanges.subscribe(result => console.log('statusChanges: ', result));
  }

  mostrarStatus() {
    console.log(this.nome);
  }

  /* Aqui o setValue altera a propriedade value de nome. É interessante notar como funciona o acesso de cada propriedade específica e como eles modificam o comportamento de cada uma delas. **/
  alterarValor() {
    this.nome.setValue('Z');
  }
  
  inputAlterado() {
    console.log(this.nome.value);
  }  

  desabilitar() {
    this.nome.disable();
  }

  habilitar() {
    this.nome.enable();
  }

  resetar() {
    this.nome.reset();
  }

  limparConsole() {
    console.clear();
  }
}
