import { Injectable } from '@angular/core';
import { CoursesListItem } from '../models/course/course';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3004/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesDataService {
  courseItem: CoursesListItem;
  constructor(private http: HttpClient) { }

  getItems(): Observable<CoursesListItem[]> {
    return this.http.get<CoursesListItem[]>(`${BASE_URL}`);
  }

  getItemsWithParams(textFragment: string, start: string, count: string, ): Observable<CoursesListItem[]> {
    return this.http.get<CoursesListItem[]>(`${BASE_URL}`, {params: {textFragment, start, count} } );
  }

  addItem (course: CoursesListItem): Observable<any> {
    return this.http.post<any>(`${BASE_URL}`, {id: course.id, name: course.title, description: course.description,
      isTopRated: course.topRated, date: course.creationDate, length: course.duration });
  }

  getItemById(id: number): Observable<any> {
    return this.http.get<any> (`${BASE_URL}/${id}`);

  }

  updateItem(newItem: CoursesListItem) {
    /*const updateItem = this.data.find(x => x.id === newItem.id);
    const index = this.data.indexOf(updateItem);
    this.data[index] = newItem;*/
  }

  removeItem(id: number) {
    return this.http.delete<CoursesListItem>(`${BASE_URL}/${id}`);
  }
}
