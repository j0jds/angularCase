import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu',
  templateUrl: './meu.component.html',
  styleUrl: './meu.component.scss'
})

export class MeuComponent implements OnInit {

  ngOnInit() {
    console.log('MeuComponent OnInit');
  }

}
