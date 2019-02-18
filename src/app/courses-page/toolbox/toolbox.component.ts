import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})

export class ToolboxComponent implements OnInit {

  @Output() searched = new  EventEmitter<string>();

  searchText = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSearch(searchText: string) {
      this.searched.emit(searchText);
  }

  onAdd() {
    this.router.navigateByUrl('courses/new');
  }
}
