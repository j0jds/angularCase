import { Component, OnInit } from '@angular/core';
import { OperationService } from './services/operation.service';
import { OperationsListResponse } from './types/operations-list-response.type';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  searchTerm: string = '';
  operationsList: OperationsListResponse = [];

  constructor(private readonly _operationsService: OperationService) {}

  ngOnInit() {
    this.getOperations();
  }

  getOperations() {
    this._operationsService.getOperations()
    .pipe(take(1))
    .subscribe((operationsListResponse) => {
      this.operationsList = operationsListResponse;
    });
  }
}
