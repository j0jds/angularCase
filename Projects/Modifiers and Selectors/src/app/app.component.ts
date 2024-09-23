import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardTextTitleDirective } from "./components/cards/directives/card-text-title.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardTextTitleDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }
