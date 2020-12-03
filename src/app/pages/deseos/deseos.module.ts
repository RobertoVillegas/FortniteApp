import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeseosPageRoutingModule } from './deseos-routing.module';

import { DeseosPage } from './deseos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeseosPageRoutingModule
  ],
  declarations: [DeseosPage]
})
export class DeseosPageModule {}
