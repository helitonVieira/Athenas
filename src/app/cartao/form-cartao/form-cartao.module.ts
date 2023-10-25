import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormCartaoPageRoutingModule } from './form-cartao-routing.module';

import { FormCartaoPage } from './form-cartao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormCartaoPageRoutingModule
  ],
  declarations: [FormCartaoPage]
})
export class FormCartaoPageModule {}
