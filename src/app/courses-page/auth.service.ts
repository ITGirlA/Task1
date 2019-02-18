import { Injectable } from '@angular/core';
import { User } from '../user/user';
import { build$ } from 'protractor/built/element';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

  private userInfo: User;

  login() {
    // stores fake user info and token to local storage
    console.log('logged in successfully');
  }

  logout() {
    this.userInfo = null;
    console.log('logout()');
  }

  isAuthenticated(): boolean {
    return true;
  }

  getUserInfo (): User {
    // returns user login
    return new User(1, 'Name', 'LName', '', '');
  }

}
