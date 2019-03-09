import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(minutes: number): string {
    if (!isNaN(minutes)) {

      // tslint:disable-next-line:no-inferrable-types
      let hhmm: string = '';
      let hh: number;
      let mm: number;

      mm = minutes % 60;

      if (minutes >= 60) {
        hh = (minutes - mm) / 60;
        hhmm = hh + 'h ';
      }

      hhmm = hhmm + mm + 'min';
      return hhmm;
    }
  }
}
