import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './services/auth.service';



@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(): Observable<boolean> {
    return this.checkAuth();
  }

  checkAuth(): Observable<boolean> {
    if (this.authService.isAuthenticated()) { return of(true); }
    this.router.navigate(['/log']);
    return of(false);
  }

}
