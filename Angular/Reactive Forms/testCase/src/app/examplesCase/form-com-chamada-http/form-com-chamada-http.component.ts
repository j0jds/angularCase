import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-com-chamada-http',
  templateUrl: './form-com-chamada-http.component.html',
  styleUrl: './form-com-chamada-http.component.scss'
})

export class FormComChamadaHttpComponent implements OnInit {

pessoaForm!: FormGroup;
personForm!: FormGroup;

  constructor(
    private readonly _userService: UserService
  ) {}

  ngOnInit(): void {
    this.createPessoaForm();
    this.createPersonForm();
    // setTimeout sendo usado aqui para acompanhar o chamar do método após algum tempo.
    setTimeout(() => {
      this.getUserAndFullfilPessoaForm();
    }, 2000)
  }

  get telefones(): FormArray {
    return this.pessoaForm.get('telefones') as FormArray;
  }

  createPessoaForm() {
    this.pessoaForm = new FormGroup({
      nome: new FormControl(''),
      idade: new FormControl('null'),
      ativo: new FormControl('false'),
      endereco: new FormGroup({
        rua: new FormControl(''),
        numero: new FormControl(null),
      }),
      telefones: new FormArray([]),
    })
  }

  private getUserAndFullfilPessoaForm() {
    this._userService.getUser().subscribe((userResponse: any) => {
      this.fullfilPessoaForm(userResponse);
    });
  }

  private fullfilPessoaForm(userResponse: any) {
    this.pessoaForm.patchValue(userResponse);
    this.telefones.clear();

    userResponse.telefones.forEach((tel: any) => {
      this.telefones.push(new FormGroup({
        numero: new FormControl(tel.numero),
        ddd: new FormControl(tel.ddd)
      }));
    })

    console.log(this.pessoaForm);
  }

  // AULA DE COMO PREENCHER UM FORM COM CONVERSÃO DE RESPONSE HTTP //

  private createPersonForm() {
    this.personForm = new FormGroup({
      name: new FormControl(''),
      age: new FormControl(null),
      active: new FormControl(false),
      address: new FormGroup({
        street: new FormControl(''),
        number: new FormControl(null),
      }),
      phoneNumbers: new FormArray([])
    })
  }

  private getUserAndFulfillPersonForm() {
    this._userService.getUser.subscribe((userResponse) => {
      this.fulfillPersonForm();
    });
  }

  private fulfillPersonForm(userResponse: any) {
    const person= {
      name: userResponse.nome,
      age: userResponse.idade,
      
    }

  }

}
