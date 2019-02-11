import { Component } from '@angular/core';
import { AuthService } from './courses-page/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Task1';
  searchText = '';

  constructor(private dataService: AuthService) {}
  onSearched(text: string) {
    this.searchText = text;
  }
}
