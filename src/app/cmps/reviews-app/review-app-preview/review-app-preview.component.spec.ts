import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewAppPreviewComponent } from './review-app-preview.component';

describe('ReviewAppPreviewComponent', () => {
  let component: ReviewAppPreviewComponent;
  let fixture: ComponentFixture<ReviewAppPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewAppPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewAppPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
