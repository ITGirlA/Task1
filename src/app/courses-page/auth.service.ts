import { Injectable } from '@angular/core';
import { User } from '../user/user';
// import { CoursesListItem } from './courses-list/course/course';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

  private userInfo: User = {
        id: 1,
        firstName: 'FirstName',
        lastName: 'LastName'
      };

  login() {
    // stores fake user info and token to local storage
  }

  logout() {
    this.userInfo = null;
  }

  isAuthenticated(): boolean {
    return true;
  }

  getUserInfo (): User {
    // returns user login
    return new User(1, 'Name', 'LName');
  }

}
