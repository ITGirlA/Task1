import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { AuthorsService } from './authors.service';
import { Author } from 'src/app/models/author/author';
import { Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, Validator, AbstractControl,
  ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AuthorsComponent),
    multi: true,
  },
  {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => AuthorsComponent),
    multi: true,
  }],
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit, ControlValueAccessor, Validator  {

  @Input() searchedAuthorsList: any;
  private data: any;
  message: string;

  authors$: Observable<Author[]>;
  private searchTerms = new Subject<string>();
  constructor( private authorsService: AuthorsService) { }
  selectedAuthor: Author;
  selectedAuthors: Author[] = [] ;
  authors: Author[];

  // Validation

  public validate(control: AbstractControl): ValidationErrors {

    return this.selectedAuthors.length === 0 ? {'selected': {value: true}} : null;
  }

  public writeValue(obj: any) {  }

  public registerOnChange(fn: any) {
      this.propagateChange = fn;
  }

  public registerOnTouched() { }

  public onChange() {
    this.propagateChange(this.selectedAuthors);
  }

  private propagateChange = (_: any) => { };

// end of validation

  onSelect(author: Author): void {
    this.selectedAuthor = author;
  }

  delete(author: Author): void {
    this.selectedAuthors = this.selectedAuthors.filter(function(value, index, arr){
      return value.id !== author.id;
    });
    this.onChange();
  }

  getAuthors(): void {
    this.authorsService.getItems()
        .subscribe(authors => this.authors = authors);
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  clearList() {
    this.searchTerms.next('_______');
  }

  stick(author: Author): void {
    if (this.selectedAuthors.filter(function(e) { return e.id === author.id; }).length === 0) {
       this.selectedAuthors.push(author);
       this.onChange();
    }
  }

  ngOnInit(): void {
    this.authors$ = this.searchTerms.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      switchMap((term: string) => this.authorsService.search(term)),
    );
  }


}
