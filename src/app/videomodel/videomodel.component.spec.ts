/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VideomodelComponent } from './videomodel.component';

describe('VideomodelComponent', () => {
  let component: VideomodelComponent;
  let fixture: ComponentFixture<VideomodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideomodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideomodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
