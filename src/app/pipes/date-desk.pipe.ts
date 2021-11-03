import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateDesk'
})

export class DateDeskPipe implements PipeTransform {

  transform(_value: Date | number | string | undefined): string {
    if (_value) {
      const value = new Date(_value)
      var past = value.getTime();
      var diff = Date.now() - past;
      if (diff < 1000 * 60 * 60) return 'Just now';
      if (diff < 1000 * 60 * 60 * 24 + 1000) return 'Today';
      if (diff < 1000 * 60 * 60 * 24 * 7) return 'This week';
      return 'At: ' + value.toLocaleString().substring(0, 9);
    } else return ''

  }

}