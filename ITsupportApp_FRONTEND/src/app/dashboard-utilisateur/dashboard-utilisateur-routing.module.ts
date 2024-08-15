import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardUtilisateurComponent} from "./dashboard-utilisateur.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardUtilisateurComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardUtilisateurRoutingModule {
}
