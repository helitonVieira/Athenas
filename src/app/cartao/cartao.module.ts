import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartaoPageRoutingModule } from './cartao-routing.module';

import { CartaoPage } from './cartao.page';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartaoPageRoutingModule,
    PipesModule
  ],
  declarations: [CartaoPage]
})
export class CartaoPageModule {}
