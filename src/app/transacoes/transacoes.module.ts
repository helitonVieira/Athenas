import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransacoesPageRoutingModule } from './transacoes-routing.module';

import { TransacoesPage } from './transacoes.page';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransacoesPageRoutingModule,
    PipesModule
  ],
  declarations: [TransacoesPage]
})
export class TransacoesPageModule {}
