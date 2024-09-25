import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})

export class TruncatePipe implements PipeTransform {

  transform(value: string, maxLength: number): string {
    if(!value) {
      return '';
    }

    const VALUE_LESS_THAN_MAX_LENGTH = value.length <= maxLength;

    if(VALUE_LESS_THAN_MAX_LENGTH) {
      return value;
    }
  
    return value.slice(0, maxLength) + '...'

  }

}
