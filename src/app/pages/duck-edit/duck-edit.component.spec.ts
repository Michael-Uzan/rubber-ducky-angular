import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuckEditComponent } from './duck-edit.component';

describe('DuckEditComponent', () => {
  let component: DuckEditComponent;
  let fixture: ComponentFixture<DuckEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuckEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuckEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
