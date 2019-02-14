import { Component, OnInit } from '@angular/core';
import { AuthService } from './courses-page/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Task1';
  searchText = '';

  isAuth: boolean;
  isAddEditPage = true;

  constructor(private dataService: AuthService) {}

  ngOnInit() {
    this.isAuth = this.dataService.isAuthenticated();
  }

  onSearched(text: string) {
    this.searchText = text;
  }
}
