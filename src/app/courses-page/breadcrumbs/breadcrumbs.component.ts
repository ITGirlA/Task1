import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})

export class BreadcrumbsComponent implements OnInit {
  public title: string = 'Courses';

  constructor() { }

  ngOnInit() {
  }

}
