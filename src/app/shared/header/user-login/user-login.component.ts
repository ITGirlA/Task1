import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/courses-page/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  public userLogin: string;
  constructor(private dataService: AuthService) { }

  ngOnInit() {
    this.userLogin = this.dataService.getUserInfo();
  }

}
