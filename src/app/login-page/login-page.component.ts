import { Component, OnInit } from '@angular/core';
import { UserDataService } from './user-data.service';
import { User } from '../user/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [UserDataService]
})
export class LoginPageComponent implements OnInit {
  public isAuth: boolean;
  public user: User ;

  constructor(private userDataService: UserDataService) { }

  ngOnInit() {
    this.user = new User(0, '', '', '', '');
  }

  login() {
    this.isAuth = this.userDataService.checkEmailAndPassword(this.user.email, this.user.password);
    if (this.isAuth) {
      // change isAuth global
      // route to courses
    }
  }

}
