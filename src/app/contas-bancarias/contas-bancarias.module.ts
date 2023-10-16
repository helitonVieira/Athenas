import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContasBancariasPageRoutingModule } from './contas-bancarias-routing.module';

import { ContasBancariasPage } from './contas-bancarias.page';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContasBancariasPageRoutingModule,
    PipesModule
  ],
  declarations: [ContasBancariasPage]
})
export class ContasBancariasPageModule {}
