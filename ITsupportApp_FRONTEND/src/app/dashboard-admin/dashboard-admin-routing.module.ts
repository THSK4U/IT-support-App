import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin.component';
import {TechnicienComponent} from "./technicien/technicien.component";
import {UtilisateurComponent} from "./utilisateur/utilisateur.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardAdminComponent
  },
  {
    path: 'Technicien',
    component: TechnicienComponent
  },
  {
    path: 'Utilisateur',
    component: UtilisateurComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAdminRoutingModule { }
