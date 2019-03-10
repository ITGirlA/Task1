import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from 'src/app/models/author/author';

const BASE_URL = 'http://localhost:3004/authors';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  author: Author;
  constructor(private http: HttpClient) { }

  getItems(): Observable<Author[]> {
    return this.http.get<Author[]>(`${BASE_URL}`);
  }

  search(textFragment: string): Observable<Author[]> {
    return this.http.get<Author[]>(`${BASE_URL}`, {params: {textFragment} } );
  }

  getItemById(id: number): Observable<any> {
    return this.http.get<any> (`${BASE_URL}/${id}`);
  }



}
