import { Component, OnInit } from '@angular/core';
import { CoursesListItem } from '../courses-list-item.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  public coursesItems: CoursesListItem[];

  constructor() { }

  ngOnInit() {
    this.coursesItems = [
      {
        id: 1,
        title: 'Item #1',
        creationDate: new Date(),
        duration: '1h 30min',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
      },
      {
        id: 2,
        title: 'Item #2',
        creationDate: new Date(),
        duration: '1h 30min',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
      },
      {
        id: 3,
        title: 'Item #3',
        creationDate: new Date(),
        duration: '1h 30min',
        description: 'Item #3'
      },
      {
        id: 4,
        title: 'Item #4',
        creationDate: new Date(),
        duration: '1h 30min',
        description: 'Item #4'
      }
    ];
  }

  onDelete(item: CoursesListItem) {
    console.log('The item with id --' + item.id + '-- is deleted');
    // tslint:disable-next-line:prefer-const
    let indexOfDeleted = this.coursesItems.indexOf(item);
    this.coursesItems.splice(indexOfDeleted, 1);
  }

}
