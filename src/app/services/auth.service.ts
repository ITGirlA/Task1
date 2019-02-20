import { Injectable, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user/user';
import { Observable , of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  @Output() getLoggedInName: EventEmitter<string> = new EventEmitter();

  constructor() { }

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
    this.getLoggedInName.emit(userInfo.email);
    return userInfo !== null;
  }

  logout() {
    localStorage.removeItem('user-email');
    this.getLoggedInName.emit('');
  }

  isAuthenticated(): boolean {
    const userInfo = localStorage.getItem('user-email');
    return userInfo !== null;
  }

  getUserInfo (): Observable<User> {
    return of(this.data.find(x => x.email === localStorage.getItem('user-email')));
  }

}
