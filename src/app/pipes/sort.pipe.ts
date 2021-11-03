import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform<T>(arr: any[], itemProp: string,): T[] {
    return (arr.sort(function (a, b) {
      return (b[itemProp] - a[itemProp]);
    }))
  }

}
