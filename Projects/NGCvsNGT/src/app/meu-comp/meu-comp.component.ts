import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-comp',
  templateUrl: './meu-comp.component.html',
  styleUrls: ['./meu-comp.component.scss']
})

export class MeuCompComponent implements OnInit {
  ngOnInit(): void {
    console.log('MeuCompComponent OnInit');
  }
}
