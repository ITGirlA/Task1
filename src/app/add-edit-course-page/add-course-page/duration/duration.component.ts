import { Component, OnInit, Input } from '@angular/core';
import { CoursesListItem } from 'src/app/courses-page/courses-list/course/course';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css']
})
export class DurationComponent implements OnInit {
  @Input() courseDuration: number;
  constructor() { }

  ngOnInit() {

  }

}
