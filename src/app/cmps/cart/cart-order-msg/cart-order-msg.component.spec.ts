import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartOrderMsgComponent } from './cart-order-msg.component';

describe('CartOrderMsgComponent', () => {
  let component: CartOrderMsgComponent;
  let fixture: ComponentFixture<CartOrderMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartOrderMsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartOrderMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
