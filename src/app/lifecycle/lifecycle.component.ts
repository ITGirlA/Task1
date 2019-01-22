import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {

  timer = 5;

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.timer--, 5000);
  }
}
