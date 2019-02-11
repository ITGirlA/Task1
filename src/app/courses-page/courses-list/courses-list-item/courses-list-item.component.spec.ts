import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesListItemComponent } from './courses-list-item.component';
// import { CoursesListItem } from '../courses-list-item.model';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DurationPipe } from './duration.pipe';
import { ColorBorderDirective } from './color-border.directive';
import { CoursesListItem } from '../course/course';

@Component({
  template: `
  <app-courses-list-item
  [coursesItem]="item" (deleted)="onDelete($event)">
  </app-courses-list-item> `
})

class TestHostComponent {
  public item: CoursesListItem = {
    id: 4,
    title: 'Item #4',
    creationDate:  new Date(),
    duration: 90,
    description: 'Item #4',
    topRated: true
  };

  public deletedItem: CoursesListItem ;
  public onDelete(deletedItem: CoursesListItem) { this.deletedItem = deletedItem; }

}

describe('CoursesListItemComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesListItemComponent, TestHostComponent, DurationPipe, ColorBorderDirective ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent );
    testHost = fixture.componentInstance;
  });

  it('should delete iteme like', () => {
    fixture.detectChanges();

    const expectedDeletedItem =  {
      id: 4,
      title: 'Item #4',
      creationDate:  new Date(),
      duration: 90,
      description: 'Item #4',
      topRated: true
    };

    const deleteButton = fixture.debugElement.query(By.css('.video-delete'));
    deleteButton.triggerEventHandler('click', null);
    testHost.item.creationDate = expectedDeletedItem.creationDate;
    expect(testHost.deletedItem).toEqual(expectedDeletedItem);

  });
});


