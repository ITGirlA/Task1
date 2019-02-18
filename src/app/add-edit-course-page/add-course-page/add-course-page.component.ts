import { Component, OnInit, Input } from '@angular/core';
import { CoursesListItem } from 'src/app/courses-page/courses-list/course/course';
import { CoursesDataService } from 'src/app/courses-page/courses-data.service';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css']
})
export class AddCoursePageComponent implements OnInit {
  @Input() courseItem: CoursesListItem;

  public id: number;
  public isCorrectRoute: boolean;

  constructor(private coursesDataService: CoursesDataService, private router: Router, private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      const idData = Number(data['id']);

      if (data['id'] !== 'new') {
        if (isNaN(idData)) {
          this.goTo404Page();
        } else {
          this.id = idData;
          const course = this.coursesDataService.getItemById(this.id);
          if (course === undefined) {
            this.goTo404Page();
          }
          this.courseItem = course;
        }
      }
    });
  }

  goTo404Page() {
    this.router.navigateByUrl('**');
  }

  onSave(save: boolean) {
    this.coursesDataService.updateItem(this.courseItem);
    this.router.navigateByUrl('');
  }


  onCancel(cancel: boolean) {
    this.courseItem = null;
    this.router.navigateByUrl('');
  }

}
