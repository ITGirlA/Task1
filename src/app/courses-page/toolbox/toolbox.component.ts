import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  template: `
  <div class="toolbox">
    <div class="search-tools">
      <input #searchText class="toolbox-input" (keyup.enter)="onSearch(searchText.value)" >
      <button class="search" (click)="onSearch(searchText.value)">Search</button>
    </div>
    <div class="add-course">
      <button >Add course</button>
    </div>
  </div>
`,
  styleUrls: ['./toolbox.component.css']
})

export class ToolboxComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  onSearch(searchText: string) {
    if (searchText) {
      console.log(searchText);
    }
  }


}
