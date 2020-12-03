// tab-bar-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabBarPage } from './tab-bar.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabBarPage,
    children: [
      {
        path: 'inicio',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/inicio/inicio.module').then(m => m.InicioPageModule)
          }
        ]
      },
      {
        path: 'casillero',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/casillero/casillero.module').then(m => m.CasilleroPageModule)
          }
        ]
      },
      {
        path: 'estadisticas',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/estadisticas/estadisticas.module').then(m => m.EstadisticasPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/inicio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabBarPageRoutingModule { }
