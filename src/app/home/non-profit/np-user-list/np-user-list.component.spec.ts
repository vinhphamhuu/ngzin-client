/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NpUserListComponent } from './np-user-list.component';

describe('NpUserListComponent', () => {
  let component: NpUserListComponent;
  let fixture: ComponentFixture<NpUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
