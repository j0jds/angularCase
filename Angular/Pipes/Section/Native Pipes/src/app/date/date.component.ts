import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrl: './date.component.scss'
})

export class DateComponent implements OnInit {
  
  minhaData: string = '2023-10-21T21:00:00.000Z';

  ngOnInit() {
      console.log('', new Date(this.minhaData))
  }

 }
