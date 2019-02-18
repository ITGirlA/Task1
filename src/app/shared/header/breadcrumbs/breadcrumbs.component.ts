import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})

export class BreadcrumbsComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  public mainPage: string = 'Courses';
  public coursePage: string;

  constructor(private router: Router, private route: ActivatedRoute ) {  }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.coursePage = data['id'];
    });
  }

}
