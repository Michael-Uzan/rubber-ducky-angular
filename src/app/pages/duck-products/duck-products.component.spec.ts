import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuckProductsComponent } from './duck-products.component';

describe('DuckProductsComponent', () => {
  let component: DuckProductsComponent;
  let fixture: ComponentFixture<DuckProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuckProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuckProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
