import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/user/user';
import { AuthService } from 'src/app/courses-page/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthService]
})
export class HeaderComponent implements OnInit {
  public userInfo: User;
  constructor(private dataService: AuthService) { }

  ngOnInit() {
    // this.userInfo = this.dataService.getUserInfo();
  }

  onLogOff(isAuth: boolean) {
    this.dataService.logout();
  }
}
