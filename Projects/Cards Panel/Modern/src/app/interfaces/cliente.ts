import { ICredito } from "./cartao-credito";
import { ISaldos } from "./saldos";

export interface ICliente {
    nome: string;
    idade: number;
    renda: number;
    nacionalidade: string;
}
