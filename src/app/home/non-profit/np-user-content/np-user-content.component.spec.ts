/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NpUserContentComponent } from './np-user-content.component';

describe('NpUserContentComponent', () => {
  let component: NpUserContentComponent;
  let fixture: ComponentFixture<NpUserContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpUserContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpUserContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
