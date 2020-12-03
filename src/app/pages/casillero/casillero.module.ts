import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasilleroPageRoutingModule } from './casillero-routing.module';

import { CasilleroPage } from './casillero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasilleroPageRoutingModule
  ],
  declarations: [CasilleroPage]
})
export class CasilleroPageModule {}
