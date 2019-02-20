import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-off',
  templateUrl: './log-off.component.html',
  styleUrls: ['./log-off.component.css']
})
export class LogOffComponent implements OnInit {
  @Output() loggedOut = new EventEmitter<boolean>();
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.loggedOut.emit();
    this.router.navigate(['log']);
  }

}
