import { Injectable } from '@angular/core';
import { CoursesListItem } from '../models/course/course';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3004/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesDataService {

  constructor(private http: HttpClient) { }

  private data: CoursesListItem[] = [
      {
        id: 1,
        title: 'Item #1',
        creationDate: new Date(2020, 2, 10),
        duration: 0,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        topRated: true
      },
      {
        id: 2,
        title: 'Item #2',
        creationDate: new Date(),
        duration: 50,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        topRated: false
      },
      {
        id: 3,
        title: 'Item #3',
        creationDate: new Date(2017, 2, 10),
        duration: 60,
        description: 'Item #3',
        topRated: true
      },
      {
        id: 4,
        title: 'Item #4',
        creationDate: new Date(2018, 2, 10),
        duration: 125,
        description: 'Item #4',
        topRated: false
      }
  ];

  getItems(): Observable<CoursesListItem[]> {
    return this.http.get<CoursesListItem[]>(`${BASE_URL}`);
  }
  /*
  getItemsWithParams(start: string, count: string): Observable<CoursesListItem[]> {
    return this.http.get<CoursesListItem[]>(`${BASE_URL}`, {params: {start, count} } );
  }
  */

  getItemsWithParams(textFragment: string, start: string, count: string, ): Observable<CoursesListItem[]> {
    return this.http.get<CoursesListItem[]>(`${BASE_URL}`, {params: {textFragment, start, count} } );
  }

  addItem(course: CoursesListItem) {
    this.data.push(course);
  }

  /*
  addItem (id, name, description, isTopRated, date, authors, length): Observable<CoursesListItem> {
    return this.http.post<CoursesListItem>(`${BASE_URL}/new`, { course });
  }
  */

  getItemById(id: number): CoursesListItem {
    return this.data.find(x => x.id === id);
  }

  updateItem(newItem: CoursesListItem) {
    const updateItem = this.data.find(x => x.id === newItem.id);
    const index = this.data.indexOf(updateItem);
    this.data[index] = newItem;
  }

  removeItem(id: number) {
    // const index = this.data.indexOf(deleteItem);
    // this.data.splice(index, 1);
    return this.http.delete<CoursesListItem>(`${BASE_URL}/${id}`);
  }
}
