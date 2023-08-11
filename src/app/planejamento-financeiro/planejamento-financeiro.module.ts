import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanejamentoFinanceiroPageRoutingModule } from './planejamento-financeiro-routing.module';

import { PlanejamentoFinanceiroPage } from './planejamento-financeiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanejamentoFinanceiroPageRoutingModule
  ],
  declarations: [PlanejamentoFinanceiroPage]
})
export class PlanejamentoFinanceiroPageModule {}
