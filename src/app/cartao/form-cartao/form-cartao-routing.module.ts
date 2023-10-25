import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormCartaoPage } from './form-cartao.page';

const routes: Routes = [
  {
    path: '',
    component: FormCartaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormCartaoPageRoutingModule {}
