import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/user/user';
import { first } from 'rxjs/operators';

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
    this.authService.login(this.user.login, this.user.password)
    .pipe(first())
            .subscribe(
                data => {
                    this.router.navigateByUrl('');
                },
                error => {
                    window.alert('wrong data');
                });
  }
}
