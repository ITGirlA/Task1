import { Component, OnInit, Input } from '@angular/core';
import { CoursesListItem } from 'src/app/courses-page/courses-list/course/course';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-creation-date',
  templateUrl: './creation-date.component.html',
  styleUrls: ['./creation-date.component.css']
})
export class CreationDateComponent implements OnInit {
  @Input() creationDate: string;
  constructor() { }

  ngOnInit() {
  }

}
