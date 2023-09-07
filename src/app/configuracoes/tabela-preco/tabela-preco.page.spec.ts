import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabelaPrecoPage } from './tabela-preco.page';

describe('TabelaPrecoPage', () => {
  let component: TabelaPrecoPage;
  let fixture: ComponentFixture<TabelaPrecoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabelaPrecoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
