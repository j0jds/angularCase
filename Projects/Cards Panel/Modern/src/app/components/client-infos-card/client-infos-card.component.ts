import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-infos-card',
  templateUrl: './client-infos-card.component.html',
  styleUrls: ['./client-infos-card.component.scss']
})

export class ClientInfosCardComponent implements OnInit {
  
  headerColor: string = 'blue';

  ngOnInit() {
    setInterval(() => {
      this.headerColor = this.headerColor === 'blue' ? 'green' : 'blue';
    }, 5000);    
  }

 }
