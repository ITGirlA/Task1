import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SearchFilterPipe } from './search-filter.pipe';
import { CoursesDataService } from '../../courses-data.service';
import { CoursesListItem } from 'src/app/models/course/course';
import { map, catchError, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { throwError, Observable, Subject, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'] ,
  providers: [CoursesDataService , SearchFilterPipe]
})

export class CoursesListComponent implements OnInit {
  public coursesItems: CoursesListItem[];
  noCoursesItems = true;
  public pageNumber = 1;
  public countToLoad = 5;
  public start = 0;
  public textToSearch = '';


  coursesItems$: Observable<CoursesListItem[]>;
  private searchTerms = new Subject<string>();

  constructor( private coursesDataService: CoursesDataService) {  }

  ngOnInit() {
     this.coursesItems$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => term.length > 2
      ? this.getObservableData(term)
      : this.getObservableData())
    );

    this.subscribeData();
    this.searchTerms.next('');
  }

  getObservableData(textFragment = ''): Observable<CoursesListItem[]> {
    return  this.coursesDataService.getItemsWithParams(textFragment, this.start.toString(), this.countToLoad.toString())
    .pipe(map(data => {
      return data.map(function(course: any) {
          return {id: course.id, title: course.name, description: course.description,
                  topRated: course.isTopRated, creationDate: course.date, duration: course.length };
        });
    }),
    catchError(this.handleError)
    );
  }

  subscribeData() {
    this.coursesItems$.subscribe( (res: CoursesListItem[]) => {
        this.coursesItems = res;
        this.checkCoursesCount();
      });
  }

  onLoad() {
    this.pageNumber++;
    this.start = this.start + this.countToLoad;
    this.coursesItems$ = this.getObservableData(this.textToSearch);
    this.subscribeData();
  }

  onDelete(item: CoursesListItem) {
    if (window.confirm('(Do you really want to delete this course?')) {
      console.log('The item with id --' + item.id + '-- is deleted');
      this.coursesDataService.removeItem(item.id).subscribe(() => {
        this.coursesItems$ = this.getObservableData(this.textToSearch);
        this.subscribeData();
      },
        (error: HttpErrorResponse) => console.log(error)
      );
      this.checkCoursesCount();
    }
  }

  checkCoursesCount() {
    this.noCoursesItems = this.coursesItems.length === 0;
  }

  onSearched(text: string) {
      this.textToSearch = text;
      this.searchTerms.next(text);
      this.subscribeData();
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        'Backend returned code ' + error.status +
        ', body was: ' + error.error);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
