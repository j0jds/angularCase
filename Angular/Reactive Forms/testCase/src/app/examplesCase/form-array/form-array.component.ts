import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.scss'
})

export class FormArrayComponent {

  musicasForm = new FormGroup({
    musicas: new FormArray([
      new FormControl('', [Validators.required])
    ]),
  })

  constructor() {
    console.log(this.musicasForm);
  }

  adicionarMusica() {
    this.musicas.push(new FormControl('', [Validators.required]));
  }

  removerMusica(musicaIndex: number) {
    this.musicas.removeAt(musicaIndex);
  }

  get musicas() {
    return this.musicasForm.get('musicas') as FormArray; 
  }

}
