import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabBarPageRoutingModule } from './tab-bar-routing.module';

import { TabBarPage } from './tab-bar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabBarPageRoutingModule
  ],
  declarations: [TabBarPage]
})
export class TabBarPageModule {}
