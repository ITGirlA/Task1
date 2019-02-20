import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';



@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkAuth();
  }

  checkAuth(): boolean {
    if (this.authService.isAuthenticated()) { return true; }

    this.router.navigate(['/log']);
  }

}