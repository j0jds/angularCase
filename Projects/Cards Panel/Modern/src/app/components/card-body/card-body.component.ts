import { Component, Input } from '@angular/core';
import { ICliente } from '../../interfaces/cliente';

@Component({
  selector: 'app-card-body',
  templateUrl: './card-body.component.html',
  styleUrl: './card-body.component.scss'
})
export class CardBodyComponent {

displayedColumns: string[] = ['name','date','status'];
@Input({ required: true }) ClientList: ICliente[] = [];

}
