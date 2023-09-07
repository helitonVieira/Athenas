import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransacoesFormPage } from './transacoes-form.page';

describe('TransacoesFormPage', () => {
  let component: TransacoesFormPage;
  let fixture: ComponentFixture<TransacoesFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TransacoesFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
