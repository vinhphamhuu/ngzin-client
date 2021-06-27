/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MeStyle3Component } from './me-style3.component';

describe('MeStyle3Component', () => {
  let component: MeStyle3Component;
  let fixture: ComponentFixture<MeStyle3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeStyle3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeStyle3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
