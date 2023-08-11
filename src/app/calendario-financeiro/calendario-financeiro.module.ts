import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarioFinanceiroPageRoutingModule } from './calendario-financeiro-routing.module';

import { CalendarioFinanceiroPage } from './calendario-financeiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarioFinanceiroPageRoutingModule
  ],
  declarations: [CalendarioFinanceiroPage]
})
export class CalendarioFinanceiroPageModule {}
