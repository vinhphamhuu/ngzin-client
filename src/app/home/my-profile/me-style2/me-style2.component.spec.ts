/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MeStyle2Component } from './me-style2.component';

describe('MeStyle2Component', () => {
  let component: MeStyle2Component;
  let fixture: ComponentFixture<MeStyle2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeStyle2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeStyle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
