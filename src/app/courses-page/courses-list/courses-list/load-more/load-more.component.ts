import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadMoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loadMore() {
    console.log('Load more');
  }
}
