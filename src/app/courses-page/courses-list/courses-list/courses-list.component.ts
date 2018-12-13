import { Component, OnInit } from '@angular/core';
import { CoursesListItem } from '../courses-list-item.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  public coursesItems: CoursesListItem[]= [
    {
      id:1,
      title: 'Item #1',
      creationDate: new Date(),
      duration: 1,
      description: 'Item #1'
    },
    {
      id:2,
      title: 'Item #2',
      creationDate: new Date(),
      duration: 1,
      description: 'Item #2'
    },
    {
      id:3,
      title: 'Item #3',
      creationDate: new Date(),
      duration: 1,
      description: 'Item #3'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
