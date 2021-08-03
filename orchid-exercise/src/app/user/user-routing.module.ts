import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appPath } from '../app-path.const';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: appPath.userflow.login,
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
