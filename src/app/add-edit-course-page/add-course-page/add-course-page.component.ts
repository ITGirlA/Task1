import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CoursesDataService } from 'src/app/courses-page/courses-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesListItem } from 'src/app/models/course/course';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css']
  // encapsulation: ViewEncapsulation.None
})
export class AddCoursePageComponent implements OnInit {
  @Input() courseItem: CoursesListItem;

  public id: number;

  constructor(private coursesDataService: CoursesDataService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.courseItem = new CoursesListItem (0, '', null , 0, '', false);

    if (!this.isAddPage()) {
      this.editCourse();
    }
  }

  editCourse() {
    this.coursesDataService.getItemById(this.id).subscribe( course  => {
        this.courseItem =  new CoursesListItem (course.id, course.name, course.date, course.length,
         course.description, course.isTopRated);
    },
    (error: HttpErrorResponse) => console.log(error)
    );
  }

  isAddPage(): boolean {
    let addPage = true;
    this.route.params.subscribe((data) => {
      this.id = Number(data['id']);
      addPage = data['id'] === 'new';
    });
    return addPage;
  }

  goTo404Page() {
    this.router.navigateByUrl('**');
  }

  onSave() {
    if (this.isAddPage()) {
      this.coursesDataService.addItem(this.courseItem)
      .subscribe
        ( data => {
            return true;
          },
          error => {
            console.error('Error adding !');
            return Observable.throw(error);
          }
        );
    } else {
      this.coursesDataService.updateItem(this.courseItem);
    }
    this.router.navigateByUrl('');
  }

  onCancel(cancel: boolean) {
    this.courseItem = null;
    this.router.navigateByUrl('');
  }
}
