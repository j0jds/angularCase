import { Component } from '@angular/core';
import { IFilterOptions } from '../../interfaces/filter-options.interface';

@Component({
  selector: 'app-filter', 
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})

export class FilterComponent {
  filterOptions: IFilterOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined,
  };
  
  
  statusList = [
    { description: 'Ativo', value: true },
    { description: 'Inativo', value: false }
  ];

  dateSelected(date: any) {
    console.log(date);
    console.log(date instanceof Date);

  }

  onFilter() {
    console.log(this.filterOptions);
  }
}
