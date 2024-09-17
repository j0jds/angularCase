import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
 isGreen: boolean = true;

 setToGreen() {
  this.isGreen = true;
 }

 setToOrange() {
  this.isGreen = false;
 }
}
