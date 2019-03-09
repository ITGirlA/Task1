import { Component, OnInit } from '@angular/core';
import { AuthorsService } from './authors.service';
import { Author } from 'src/app/models/author/author';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor( private authorsService: AuthorsService) { }

  selectedAuthor: Author;
  selectedAuthors: Author[];
  authors: Author[];

  ngOnInit() {
    this.getAuthors();
  }

  onSelect(author: Author): void {
    this.selectedAuthor = author;
  }

  getAuthors(): void {
    this.authorsService.getItems()
        .subscribe(authors => this.authors = authors);
  }

}
