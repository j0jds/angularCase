import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

listPeople = [
    { name: 'Joel', age: 70, },
    { name: 'Manoel', age: 12, },
    { name: 'Batista', age: 65, },
    { name: 'Darcy', age: 99, },
  ];

selectPerson(index: number){
  console.log(index);
}

}