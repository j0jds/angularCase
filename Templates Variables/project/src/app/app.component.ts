import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}

const funcaoPai = () => {
  let pai = 'pai';

  const funcaoFilha = () => {
    let filha = 'filha';

    pai = 'teste';
  }
}
