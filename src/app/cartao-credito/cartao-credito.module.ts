import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartaoCreditoPageRoutingModule } from './cartao-credito-routing.module';

import { CartaoCreditoPage } from './cartao-credito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartaoCreditoPageRoutingModule
  ],
  declarations: [CartaoCreditoPage]
})
export class CartaoCreditoPageModule {}
