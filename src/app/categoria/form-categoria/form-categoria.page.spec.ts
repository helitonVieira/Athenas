import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormCategoriaPage } from './form-categoria.page';

describe('FormCategoriaPage', () => {
  let component: FormCategoriaPage;
  let fixture: ComponentFixture<FormCategoriaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormCategoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
