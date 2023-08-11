import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContasBancariasPage } from './contas-bancarias.page';

describe('ContasBancariasPage', () => {
  let component: ContasBancariasPage;
  let fixture: ComponentFixture<ContasBancariasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContasBancariasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
