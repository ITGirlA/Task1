import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadMoreComponent implements OnInit {
  @Output() loaded = new  EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  loadMore() {
    this.loaded.emit();
  }
}
