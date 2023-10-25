import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartaoPage } from './cartao.page';

const routes: Routes = [
  {
    path: '',
    component: CartaoPage
  },
  {
    path: 'form-cartao',
    loadChildren: () => import('./form-cartao/form-cartao.module').then( m => m.FormCartaoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartaoPageRoutingModule {}
