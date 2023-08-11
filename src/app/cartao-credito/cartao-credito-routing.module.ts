import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartaoCreditoPage } from './cartao-credito.page';

const routes: Routes = [
  {
    path: '',
    component: CartaoCreditoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartaoCreditoPageRoutingModule {}
