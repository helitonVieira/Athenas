import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarioFinanceiroPage } from './calendario-financeiro.page';

describe('CalendarioFinanceiroPage', () => {
  let component: CalendarioFinanceiroPage;
  let fixture: ComponentFixture<CalendarioFinanceiroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CalendarioFinanceiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
