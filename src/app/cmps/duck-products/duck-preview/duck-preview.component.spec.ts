import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuckPreviewComponent } from './duck-preview.component';

describe('DuckPreviewComponent', () => {
  let component: DuckPreviewComponent;
  let fixture: ComponentFixture<DuckPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuckPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuckPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
