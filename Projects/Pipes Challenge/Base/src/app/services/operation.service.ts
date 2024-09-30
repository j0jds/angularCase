import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OperationsListResponse } from '../types/operations-list-response.type';
import { OperationsListResponseMock } from '../mocks/operation-list-response.mock';

@Injectable({
  providedIn: 'root'
})

export class OperationService {
  getOperations(): Observable<OperationsListResponse> {
    return of(OperationsListResponseMock);
  }

}
