import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanejamentoFinanceiroPage } from './planejamento-financeiro.page';

const routes: Routes = [
  {
    path: '',
    component: PlanejamentoFinanceiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanejamentoFinanceiroPageRoutingModule {}
