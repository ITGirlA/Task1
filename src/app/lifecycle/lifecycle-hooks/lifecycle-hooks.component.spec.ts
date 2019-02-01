import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleHooksComponent } from './lifecycle-hooks.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('LifecycleHooksComponent', () => {
  let component: LifecycleHooksComponent;
  let fixture: ComponentFixture<LifecycleHooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifecycleHooksComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
