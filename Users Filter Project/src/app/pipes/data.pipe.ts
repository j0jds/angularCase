import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'data'
})
export class DataPipe implements PipeTransform {

  transform(data: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
