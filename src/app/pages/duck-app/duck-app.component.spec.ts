/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DuckAppComponent } from './duck-app.component';

describe('DuckProductsComponent', () => {
  let component: DuckAppComponent;
  let fixture: ComponentFixture<DuckAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DuckAppComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuckAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
