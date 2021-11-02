import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarFilterComponent } from './side-bar-filter.component';

describe('SideBarFilterComponent', () => {
  let component: SideBarFilterComponent;
  let fixture: ComponentFixture<SideBarFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
