import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class PessoaFormController {
    pessoaForm!: FormGroup;

    constructor(
        private readonly _fb: FormBuilder
    ) {
        this.pessoaForm = this._fb.group({
            nome: ['', [Validators.required]], 
            email: this._fb.control('', { validators: [Validators.required] }), 
            endereco: this._fb.group({ 
              rua: ['', [Validators.required]], 
              numero: ['', [Validators.required]] 
            }),
            musicas: this._fb.array([ 
              ['', [Validators.required]],
            ])
          })
    }
}