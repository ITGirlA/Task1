import { Component, OnInit, Input } from '@angular/core';
import { CoursesDataService } from 'src/app/courses-page/courses-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesListItem } from 'src/app/models/course/course';


@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.css']
})
export class AddCoursePageComponent implements OnInit {
  @Input() courseItem: CoursesListItem;

  public id: number;

  constructor(private coursesDataService: CoursesDataService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.isAddPage()) {
      this.courseItem = new CoursesListItem (10, '', new Date(), 0, '', false);
    } else {
      const course = this.coursesDataService.getItemById(this.id);
      if (course === undefined) {
        this.goTo404Page();
      }
      this.courseItem = course;
    }

  }

  isAddPage(): boolean {
    let addPage: boolean = true;
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
      this.coursesDataService.addItem(this.courseItem);
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
