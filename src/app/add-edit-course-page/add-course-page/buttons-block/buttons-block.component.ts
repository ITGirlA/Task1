import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons-block',
  templateUrl: './buttons-block.component.html',
  styleUrls: ['./buttons-block.component.css']
})
export class ButtonsBlockComponent implements OnInit {
  @Output() save = new  EventEmitter<true>();
  @Output() cancel = new  EventEmitter<true>();
  constructor() { }

  ngOnInit() {
  }

  saveItem() {
    this.save.emit(true);
  }

  cancelItem() {
    this.cancel.emit(true);
  }



}
