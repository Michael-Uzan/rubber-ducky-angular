import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsAppComponent } from './reviews-app.component';

describe('ReviewsAppComponent', () => {
  let component: ReviewsAppComponent;
  let fixture: ComponentFixture<ReviewsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
