import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  operations = [
    {
      customerName: 'João',
      customerStatus: 1,
      operationDate: '2023-10-31T17:30:00.00Z',
      operationValue: 500.00,
      operationRisck: 0.40,
    },
    {
      customerName: 'Maria',
      customerStatus: 2,
      operationDate: '2023-10-30T13:15:00.00Z',
      operationValue: 750.99,
      operationRisck: 0.0675,
    },
    {
      customerName: 'Pedro',
      customerStatus: 1,
      operationDate: '2023-10-29T01:15:00.00Z',
      operationValue: 3000000.00,
      operationRisck: 1.0,
    },
    {
      customerName: 'Laura',
      customerStatus: 2,
      operationDate: '2023-10-25T03:25:00.00Z',
      operationValue: 150300.35,
      operationRisck: 0.10315,
    },
  ];
}
