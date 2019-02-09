import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CoursesListItem } from '../courses-list-item.model';
import { SearchFilterPipe } from './search-filter.pipe';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'] ,
  providers: [SearchFilterPipe]
})

export class CoursesListComponent implements OnInit, OnChanges {
  @Input() searchText: string;
  public coursesItems: CoursesListItem[];
  public coursesItemsDB: CoursesListItem[];

  noCoursesItems = true;

  constructor(private searchFilter: SearchFilterPipe) { }

  ngOnInit() {
    this.coursesItemsDB = [
      {
        id: 1,
        title: 'Item #1',
        creationDate: new Date(2020, 2, 10),
        duration: 0,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        topRated: true
      },
      {
        id: 2,
        title: 'Item #2',
        creationDate: new Date(),
        duration: 50,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        topRated: false
      },
      {
        id: 3,
        title: 'Item #3',
        creationDate: new Date(2017, 2, 10),
        duration: 60,
        description: 'Item #3',
        topRated: true
      },
      {
        id: 4,
        title: 'Item #4',
        creationDate: new Date(2018, 2, 10),
        duration: 125,
        description: 'Item #4',
        topRated: false
      }
    ];

    this.coursesItems = this.coursesItemsDB;

    this.checkCoursesCount();
  }

  ngOnChanges() {
    if (this.coursesItems) {
      this.coursesItems = this.searchFilter.transform(this.coursesItemsDB, this.searchText);
    }
  }

  onDelete(item: CoursesListItem) {
    console.log('The item with id --' + item.id + '-- is deleted');
    // tslint:disable-next-line:prefer-const
    let indexOfDeleted = this.coursesItemsDB.indexOf(item);
    this.coursesItemsDB.splice(indexOfDeleted, 1);

    this.checkCoursesCount();
  }

  checkCoursesCount() {
    this.noCoursesItems = this.coursesItems.length === 0;
  }

}
