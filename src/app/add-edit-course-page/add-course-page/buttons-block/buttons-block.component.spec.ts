import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsBlockComponent } from './buttons-block.component';

describe('ButtonsBlockComponent', () => {
  let component: ButtonsBlockComponent;
  let fixture: ComponentFixture<ButtonsBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
