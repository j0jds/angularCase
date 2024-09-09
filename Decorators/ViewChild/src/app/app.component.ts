import { Component, ViewChild } from '@angular/core';
import { FilhoComponent } from './filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

@ViewChild('filhoComp')
  filhoCompRef!: FilhoComponent;

  hello() {
    this.filhoCompRef.dizerOi();
    this.filhoCompRef.message = 'Eu disse Oi!';
  }
}