import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransacoesFormPageRoutingModule } from './transacoes-form-routing.module';

import { TransacoesFormPage } from './transacoes-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransacoesFormPageRoutingModule
  ],
  declarations: [TransacoesFormPage]
})
export class TransacoesFormPageModule {}
