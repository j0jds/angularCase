import { Component, Input } from '@angular/core';
import { ICliente } from '../../interfaces/cliente';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  @Input({ required: true }) ClientList: ICliente[] = [];


}
