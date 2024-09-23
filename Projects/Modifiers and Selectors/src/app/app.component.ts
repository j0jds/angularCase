import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardTextTitleDirective } from "./components/cards/directives/card-text-title.directive";
import { CardTextSubtitleDirective } from "./components/cards/directives/card-text-subtitle.directive";
import { CardTextDescriptionDirective } from "./components/cards/directives/card-text-description.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardTextTitleDirective, CardTextSubtitleDirective, CardTextDescriptionDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }
