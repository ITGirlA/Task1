import { Injectable } from '@angular/core';
import { User } from '../user/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

  private isAuth = false;

  private data: User[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Snow',
      email: 'John_Snow@epam.com',
      password: 'Know nothing'
    },
    {
      id: 2,
      firstName: 'Hodor',
      lastName: 'Hodor',
      email: 'Hodor',
      password: 'Hodor'
    }
  ];

  login(email: string, password: string): boolean {
    const userInfo = this.data.find(x => x.email === email && x.password === password);
    localStorage.setItem('user-email', userInfo.email);
    return userInfo !== null;
  }

  logout() {
    localStorage.removeItem('user-email');
  }

  isAuthenticated(): boolean {
    const userInfo = localStorage.getItem('user-email');
    return userInfo !== null;
  }

  getUserInfo (): string {
    return this.data.find(x => x.email === localStorage.getItem('user-email')).email;
  }

}
