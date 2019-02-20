import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/user/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [AuthService]
})
export class LoginPageComponent implements OnInit {
  public isAuth: boolean;
  public user: User ;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = new User(0, '', '', '', '');
  }

  login() {
    this.isAuth = this.authService.login(this.user.email, this.user.password);

    if (!this.isAuth) {
      window.alert('wrong data');
    } else {
      this.router.navigateByUrl('');
    }
  }

}
