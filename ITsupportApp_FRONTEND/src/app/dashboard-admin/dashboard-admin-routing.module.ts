import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin.component';
import {TechnicienComponent} from "./technicien/technicien.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardAdminComponent
  },
  {
    path: 'Technicien',
    component: TechnicienComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAdminRoutingModule { }
