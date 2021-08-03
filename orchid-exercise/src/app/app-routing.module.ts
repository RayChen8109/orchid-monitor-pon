import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { appPath } from './app-path.const';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: appPath.main,
    loadChildren: () => import('./main/main.module').then(x => x.MainModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: appPath.userflow.user,
    loadChildren: () => import('./user/user.module').then(x => x.UserModule)
  },
  {
    path: '**',
    redirectTo: appPath.main,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    // 追蹤路由
    // enableTracing: true,
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
