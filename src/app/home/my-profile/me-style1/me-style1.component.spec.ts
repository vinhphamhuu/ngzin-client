/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MeStyle1Component } from './me-style1.component';

describe('MeStyle1Component', () => {
  let component: MeStyle1Component;
  let fixture: ComponentFixture<MeStyle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeStyle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeStyle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
