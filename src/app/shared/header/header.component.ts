import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user/user';
import { userInfo } from 'os';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthService]
})

export class HeaderComponent implements OnInit, OnChanges {
  public userInfo: User;
  userLogin: string;

  constructor(private authService: AuthService) {
    authService.getUserInfo().subscribe(login => this.userInfo = login);
    if (this.userInfo !== undefined) {
      this.userLogin = this.userInfo.email;
    }
  }

  ngOnInit() {

  }

  onLogOff() {
    this.userLogin = '';
  }

  ngOnChanges() {

  }
}
