import { Injectable, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map  } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { ACTION_LOGOUT, ACTION_LOGIN } from '../store/actions/appActions';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private authUrl = 'http://localhost:3004/auth';
  @Output() getLoggedInName: EventEmitter<string> = new EventEmitter();

  constructor(private http: HttpClient, private store: Store<any>) { }

  private user: User[] = [];

  login(login: string, password: string) {
    return this.http.post<any>(`${this.authUrl}/login`, { login, password })
          .pipe(map(data => {
              if (data && data.token) {
                this.user = data;
                this.updateState({action: ACTION_LOGIN, payload : data.token});
                // localStorage.setItem('token', data.token);
              }
          }));
  }

  logout() {
    this.updateState({action: ACTION_LOGOUT});
    // localStorage.removeItem('token');
    this.getLoggedInName.emit('');
  }

  getToken(): string {
    let token = '';
    this.getState().subscribe(state => {
      token = state.token;
    });
    return token;
    // return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    let isAuth = false;
    this.getState().subscribe(state => {
      isAuth = state.login;
    });
    return isAuth;
  }

  getUserInfo(): Observable<User> {
    const url = this.authUrl + '/userInfo';
    return this.http.post<User>(url, {});
  }

  getState() {
    return this.store.select('appReducer');
  }

  updateState(obj) {
    this.store.dispatch({
      type: obj.action,
      payload: obj.payload
    });
  }

}
