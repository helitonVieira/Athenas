import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContasBancariasPage } from './contas-bancarias.page';

const routes: Routes = [
  {
    path: '',
    component: ContasBancariasPage
  },
  {
    path: 'conta',
    loadChildren: () => import('./conta-form/conta/conta.module').then( m => m.ContaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContasBancariasPageRoutingModule {}
