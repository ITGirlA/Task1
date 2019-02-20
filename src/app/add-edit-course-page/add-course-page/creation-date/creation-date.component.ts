import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-creation-date',
  templateUrl: './creation-date.component.html',
  styleUrls: ['./creation-date.component.css']
})
export class CreationDateComponent implements OnInit {
  @Input() creationDate: string;
  constructor() { }

  ngOnInit() {
  }

}
