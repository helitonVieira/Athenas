import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransacoesFormPage } from './transacoes-form.page';

const routes: Routes = [
  {
    path: '',
    component: TransacoesFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransacoesFormPageRoutingModule {}
