import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContasBancariasPage } from './contas-bancarias.page';

const routes: Routes = [
  {
    path: '',
    component: ContasBancariasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContasBancariasPageRoutingModule {}
