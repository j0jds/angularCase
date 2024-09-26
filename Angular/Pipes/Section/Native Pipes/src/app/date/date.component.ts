import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrl: './date.component.scss'
})

export class DateComponent implements OnInit {
  
  minhaData: string = '2024-09-26T21:00:00.000Z';
  minhaDataOBJ: Date = new Date('2024-09-26T21:00:00.000Z');

  ngOnInit() {
      console.log('Data convertida para região: ', new Date(this.minhaData));
      console.log('Data UTC-0: ', new Date(this.minhaData).toUTCString());
      console.log('Timestamp: ', new Date(this.minhaData).getTime());
      console.log(this.minhaDataOBJ);
    }

 }
