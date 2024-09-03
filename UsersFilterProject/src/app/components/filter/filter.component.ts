import { Component } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-filter', 
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  foods: Food[] = [
    {
      value: 'Teste',
      viewValue: 'Teste',
    },
  ];
}
