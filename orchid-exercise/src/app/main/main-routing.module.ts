import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appPath } from '../app-path.const';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children : [
      {
        path: appPath.home,
        loadChildren: () => import('../home/home.module').then(x => x.HomeModule)
      },
      {
        path: appPath.history,
        loadChildren: () => import('../history/history.module').then(x => x.HistoryModule)
      },
      {
        path: appPath.snapshot,
        loadChildren: () => import('../snapshot/snapshot.module').then(x => x.SnapshotModule)
      },
      {
        path: appPath.setup,
        loadChildren: () => import('../setup/setup.module').then(x => x.SetupModule)
      },
      {
        path: '**',
        loadChildren: () => import('../home/home.module').then(x => x.HomeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
