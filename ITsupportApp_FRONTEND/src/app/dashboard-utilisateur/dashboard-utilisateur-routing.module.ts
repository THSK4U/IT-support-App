import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardAdminComponent} from "../dashboard-admin/dashboard-admin.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardUtilisateurRoutingModule {
}
