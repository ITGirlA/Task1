import { Pipe, PipeTransform } from '@angular/core';
import { CoursesListItem } from '../course/course';
// import { CoursesListItem } from '../courses-list-item.model';

@Pipe({
  name: 'orderByDate'
})

export class OrderByDatePipe implements PipeTransform {

  transform(items: CoursesListItem[], field: string): CoursesListItem[] {
    items.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    return items;
  }
}
