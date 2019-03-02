import { Injectable, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map  } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private authUrl = 'http://localhost:3004/auth';
  @Output() getLoggedInName: EventEmitter<string> = new EventEmitter();

  constructor(private http: HttpClient) { }

  private user: User[] = [];

  login(login: string, password: string) {
    return this.http.post<any>(`${this.authUrl}/login`, { login, password })
          .pipe(map(data => {
              if (data && data.token) {
                this.user = data;
                localStorage.setItem('token', data.token);
              }
          }));
  }

  logout() {
    localStorage.removeItem('token');
    this.getLoggedInName.emit('');
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    // return tokenNotExpired(token);
    return token !== null;
  }

  getUserInfo(): Observable<User> {
    const url = this.authUrl + '/userInfo';
    return this.http.post<User>(url, {});
  }

}
