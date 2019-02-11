import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-log-off',
  templateUrl: './log-off.component.html',
  styleUrls: ['./log-off.component.css']
})
export class LogOffComponent implements OnInit {
  @Output() isAuth = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  logout() {
    this.isAuth.emit(false);
  }

}
