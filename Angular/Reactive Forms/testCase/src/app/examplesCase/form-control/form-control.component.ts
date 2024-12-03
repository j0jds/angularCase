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
  /* Aqui o FormControl recebe um nonNullable que faz com que ele seja válido ainda que seja untouched e não seja dirty. Ao abrir um [] torna-se possível passar mais de um validador para o validators, enquanto nesse caso foi passado apenas um que é o required. */

  nome = new FormControl('Inicial', [Validators.required, Validators.minLength(6)]);
  // Aqui o FormControl recebe um validators de minLength com pelo menos 6 caracteres. Se tiver menos que 6, então ele retorna falso.

  // nome = new FormControl('Inicial', {nonNullable: true, validators: [Validators.required], updateOn: "blur"});

  audio = new Audio('assets/sound.mp3');
  
  ngOnInit() {
    console.log(this.nome);

    this.nome.valueChanges.subscribe(result => console.log('valueChanges: ', result));
    this.nome.statusChanges.subscribe(result => console.log('statusChanges: ', result));
    this.nome.statusChanges.subscribe(() => this.checarErros());
  }

  mostrarStatus() {
    console.log(this.nome);
  }

  /* Aqui o setValue altera a propriedade value de nome. É interessante notar como funciona o acesso de cada propriedade específica e como eles modificam o comportamento de cada uma delas. */
  alterarValor() {
    this.nome.setValue('Z');
  }

  inputAlterado() {
    console.log(this.nome.value);
    this.checarErros();
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

  // Esses métodos foram adicionados com o intuito de sobrescrever os validadores já estabelecidos lá em cima.

  /* O que acontece no setValidators: o método zera os validadores, adiciona um valor inicial de 2 caracteres, substitui o validador anterior pelo de tamanho mínimo (6) e o último método aplica as mudanças de imediato e reavalia o estado do control. */
  setValidators() {
    this.nome.setValidators([]);
    this.nome.setValue('Ep');
    this.nome.setValidators(Validators.minLength(6));
    this.nome.updateValueAndValidity();
  }

  /* O que acontece em addValidators: o método adiciona o validador de tamanho máximo a nome e em seguida aplica as mudanças de imediato e reavalia o estado do control. */
  addValidators() {
    this.nome.addValidators(Validators.maxLength(7));
    this.nome.updateValueAndValidity();
  }

  checarErros() {
    if (this.nome.hasError('required') || this.nome.hasError('minlength') || this.nome.hasError('maxlength')) {
      if (this.audio.paused) {
        this.tocarSom();
      }
    } else {
      this.pararSom();  
    }
  }

  pararSom() {
    this.audio.pause();
    this.audio.currentTime = 0;  
  }
  
  

  tocarSom() {
    this.audio.loop = true;  
    this.audio.play().catch(error => {
      console.error('Erro ao tentar tocar o som: ', error);
    });
  }
  
  
}
