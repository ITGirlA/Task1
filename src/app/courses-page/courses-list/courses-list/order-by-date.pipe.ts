import { Pipe, PipeTransform } from '@angular/core';
import { CoursesListItem } from 'src/app/models/course/course';

@Pipe({
  name: 'orderByDate'
})

export class OrderByDatePipe implements PipeTransform {

  transform(items: CoursesListItem[], field: string): CoursesListItem[] {
    if (items) {
      items.sort((a: any, b: any) => {
        if (a[field] < b[field]) {
          return -1;
        } else if (a[field] > b[field]) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    return items;
  }
}
