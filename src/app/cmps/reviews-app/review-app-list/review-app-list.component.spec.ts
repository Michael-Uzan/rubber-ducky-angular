import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewAppListComponent } from './review-app-list.component';

describe('ReviewAppListComponent', () => {
  let component: ReviewAppListComponent;
  let fixture: ComponentFixture<ReviewAppListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewAppListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewAppListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
