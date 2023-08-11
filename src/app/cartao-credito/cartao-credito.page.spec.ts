import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartaoCreditoPage } from './cartao-credito.page';

describe('CartaoCreditoPage', () => {
  let component: CartaoCreditoPage;
  let fixture: ComponentFixture<CartaoCreditoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CartaoCreditoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
