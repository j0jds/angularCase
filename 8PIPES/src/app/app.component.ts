import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  pessoa = {
    name: 'Felipe',
    status: 1,
  };

  pessoa2 = {
    name: 'Gabriel',
    status: 2,
  };

  pessoa3 = {
    name: 'Henrique',
    status: 3,
  };

}
