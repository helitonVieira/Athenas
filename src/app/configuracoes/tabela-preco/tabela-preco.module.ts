import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabelaPrecoPageRoutingModule } from './tabela-preco-routing.module';

import { TabelaPrecoPage } from './tabela-preco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabelaPrecoPageRoutingModule
  ],
  declarations: [TabelaPrecoPage]
})
export class TabelaPrecoPageModule {}
