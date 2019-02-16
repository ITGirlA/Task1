import { Component, OnInit, Input } from '@angular/core';
import { CoursesListItem } from 'src/app/courses-page/courses-list/course/course';
import { CoursesDataService } from 'src/app/courses-page/courses-data.service';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css']
})
export class AddCoursePageComponent implements OnInit {
  @Input() courseItem: CoursesListItem;

  constructor(private coursesDataService: CoursesDataService) { }

  ngOnInit() {
    this.courseItem = this.coursesDataService.getItemById(1);
  }

  onSave(save: boolean) {
    console.log('Save');
  }

  onCancel(cancel: boolean) {
    console.log('Cancel');
  }

}
