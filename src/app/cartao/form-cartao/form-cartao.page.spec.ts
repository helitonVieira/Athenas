import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormCartaoPage } from './form-cartao.page';

describe('FormCartaoPage', () => {
  let component: FormCartaoPage;
  let fixture: ComponentFixture<FormCartaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormCartaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
