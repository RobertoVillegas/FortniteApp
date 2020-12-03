import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasilleroPage } from './casillero.page';

const routes: Routes = [
  {
    path: '',
    component: CasilleroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasilleroPageRoutingModule {}
