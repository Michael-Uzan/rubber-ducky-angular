import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstCapital'
})
export class FirstCapitalPipe implements PipeTransform {

  transform(value: string): string {
    return (value.charAt(0).toLocaleUpperCase() + value.substring(1));
  }

}
