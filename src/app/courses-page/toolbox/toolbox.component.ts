import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  template: `
  <div class="toolbox">
    <div class="search-tools">
      <input [(ngModel)]="searchText" class="toolbox-input" (keyup.enter)="onSearch(searchText)" >
      <button class="search" (click)="onSearch(searchText)">Search</button>
    </div>
    <div class="add-course">
      <button >Add course</button>
    </div>
  </div>
`,
  styleUrls: ['./toolbox.component.css']
})

export class ToolboxComponent implements OnInit {
  searchText : string ="****default text****";

  constructor() { }

  ngOnInit() {
  }

  onSearch(searchText: string) {
    if (searchText) {
      console.log(searchText);
    }
  }


}
