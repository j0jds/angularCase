import { ICredito } from "./cartao-credito";
import { ISaldos } from "./saldos";

export interface ICliente {
    nome: string;
    idade: number;
    rendaMensal: number;
    nacionalidade: string;
    saldos: ISaldos;
    credito: ICredito;
}
