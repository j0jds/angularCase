import { ICliente } from '../interfaces/cliente';

export const ClientList: ICliente[] = [
  {
    nome: 'Joel Santana',
    idade: 75,
    rendaMensal: 1000,
    nacionalidade: 'brasileiro',
    saldos: {
      corrente: 200,
      vinculados: 300,
      poupanca: 400,
      investimentoscb: 500,
      investimentossb: 500,
      total: 1000,
      livre: 1000,
    },
    credito: {
      limite: 1000,
      disponivel: 1200,
      limiteSaque: 2000,
      disponivel2: 1300,
      limiteTotalUtilizado: 3000,
    },
  },
];