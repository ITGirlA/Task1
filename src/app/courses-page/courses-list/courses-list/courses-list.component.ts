import { Component, OnInit, Input, OnChanges } from '@angular/core';
// import { CoursesListItem } from '../courses-list-item.model';
import { SearchFilterPipe } from './search-filter.pipe';
import { CoursesDataService } from '../../courses-data.service';
import { CoursesListItem } from '../course/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'] ,
  providers: [CoursesDataService , SearchFilterPipe]
})

export class CoursesListComponent implements OnInit, OnChanges {
  @Input() searchText: string;
  public coursesItems: CoursesListItem[];
  public coursesItemsNoFilter: CoursesListItem[];

  noCoursesItems = true;

  constructor(private searchFilter: SearchFilterPipe, private coursesDataService: CoursesDataService) { }

  ngOnInit() {
    this.coursesItemsNoFilter = this.coursesDataService.getItems();
    this.coursesItems = this.coursesItemsNoFilter;
    this.checkCoursesCount();
  }

  ngOnChanges() {
    if (this.coursesItems) {
      this.coursesItems = this.searchFilter.transform(this.coursesItemsNoFilter, this.searchText);
    }
  }

  onDelete(item: CoursesListItem) {
    if (window.confirm('(Do you really want to delete this course?')) {
      console.log('The item with id --' + item.id + '-- is deleted');
      this.coursesDataService.removeItem(item);
      this.checkCoursesCount();
    }
  }

  checkCoursesCount() {
    this.noCoursesItems = this.coursesItems.length === 0;
  }

}
