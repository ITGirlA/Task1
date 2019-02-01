import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})

export class ToolboxComponent implements OnInit {
  searchText = '****default text****';

  constructor() { }

  ngOnInit() {
  }

  onSearch(searchText: string) {
    if (searchText) {
      console.log(searchText);
    }
  }


}
