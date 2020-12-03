import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeseosPage } from './deseos.page';

const routes: Routes = [
  {
    path: '',
    component: DeseosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeseosPageRoutingModule {}
