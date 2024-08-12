import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TechnicienComponent} from "./dashboard-admin/technicien/technicien.component";
import {DashboardAdminComponent} from "./dashboard-admin/dashboard-admin.component";

const routes: Routes = [
  {
    path: 'Admin',
    loadChildren: () => import('./dashboard-admin/dashboard-admin.module').then(m => m.DashboardAdminModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
