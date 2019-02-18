import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CoursesListItem } from '../course/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.css'] ,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListItemComponent implements OnInit, OnDestroy {

  @Input() coursesItem: CoursesListItem;
  @Output() deleted = new  EventEmitter<CoursesListItem>();

  public iconPath = 'assets/images/star.png';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  deleteItem(item: CoursesListItem) {
    this.deleted.emit(item);
  }

  editItem(item: CoursesListItem) {
    this.router.navigate(['courses', item.id]);
  }

  ngOnDestroy() {
    console.log('OnDestroy');
  }

}
