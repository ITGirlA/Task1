import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user/user';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  @Input() userLogin: string;
  public userInfo: User;


  constructor(private authService: AuthService) {
    authService.getUserInfo().subscribe(login => this.userInfo = login);
    if (this.userInfo !== undefined) {
      this.userLogin = this.userInfo.email;
    }
  }



  ngOnInit() {
  }

}
