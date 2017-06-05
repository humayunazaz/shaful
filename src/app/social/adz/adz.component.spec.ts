/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdzComponent } from './adz.component';

describe('AdzComponent', () => {
  let component: AdzComponent;
  let fixture: ComponentFixture<AdzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
