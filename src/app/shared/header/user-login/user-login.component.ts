import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  @Input() userLogin: string;

  constructor() {}
  ngOnInit() {
  }

}
