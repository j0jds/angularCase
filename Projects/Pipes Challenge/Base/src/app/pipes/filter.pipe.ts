import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter',
})

export class FilterPipe implements PipeTransform {
    transform(list: any[], searchProp: string, searchValue: string): any[] {
        if (list.length === 0 || !searchValue ) {
            return list;
        } 

        return list.filter((item) => item[searchProp].toLowerCase().includes(searchValue.toLowerCase()));
        
    }
}