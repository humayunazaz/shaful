/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FindDateComponent } from './find-date.component';

describe('FindDateComponent', () => {
  let component: FindDateComponent;
  let fixture: ComponentFixture<FindDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
