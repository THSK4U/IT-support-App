import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin.component';
import {TechnicienComponent} from "./technicien/technicien.component";
import {UtilisateurComponent} from "./utilisateur/utilisateur.component";
import {PanneComponent} from "./panne/panne.component";
import {FormAjouterutilisateurComponent} from "./utilisateur/form-ajouterutilisateur/form-ajouterutilisateur.component";

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
  },
  {
    path: 'Panne',
    component: PanneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [
  ],
  exports: [RouterModule]
})
export class DashboardAdminRoutingModule { }
