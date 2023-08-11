import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanejamentoFinanceiroPage } from './planejamento-financeiro.page';

describe('PlanejamentoFinanceiroPage', () => {
  let component: PlanejamentoFinanceiroPage;
  let fixture: ComponentFixture<PlanejamentoFinanceiroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlanejamentoFinanceiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
