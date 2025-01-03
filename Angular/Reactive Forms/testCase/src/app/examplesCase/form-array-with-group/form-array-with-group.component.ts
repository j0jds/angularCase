import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array-with-group',
  templateUrl: './form-array-with-group.component.html',
  styleUrl: './form-array-with-group.component.scss'
})

export class FormArrayWithGroupComponent {

  private criarGrupoMusica() {
    return new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      banda: new FormControl('', [Validators.required]), 
    })
  }

  musicasForm = new FormGroup({
     musicas: new FormArray([
      this.criarGrupoMusica()
     ]),
  });

  constructor() {
    console.log(this.musicasForm)
    
    this.musicas.valueChanges.subscribe((value) => console.log('Value Changes', value))
  }

  get musicas(): FormArray {
    return this.musicasForm.get('musicas') as FormArray
  }

  adicionarMusica() {
    this.musicas.push(this.criarGrupoMusica());
  }

  removerMusica(musicaIndex: number) {
    this.musicas.removeAt(musicaIndex);
  }
}
