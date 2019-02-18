import { Pipe, PipeTransform } from '@angular/core';
import { CoursesListItem } from '../course/course';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(allItems: CoursesListItem[], searchText: string) {
    return allItems.filter(item => item.title.toUpperCase().indexOf(searchText.toUpperCase()) > -1);
  }

}
