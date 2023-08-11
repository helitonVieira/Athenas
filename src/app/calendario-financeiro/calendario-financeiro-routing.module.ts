import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarioFinanceiroPage } from './calendario-financeiro.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarioFinanceiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarioFinanceiroPageRoutingModule {}
