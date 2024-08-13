import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAdminRoutingModule } from './dashboard-admin-routing.module';
import {TechnicienComponent} from "./technicien/technicien.component";
import {DashboardAdminComponent} from "./dashboard-admin.component";
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { ListTechnicienComponent } from './technicien/list-technicien/list-technicien.component';
import {FormsModule} from "@angular/forms";
import { FormAjoutertechnicienComponent } from './technicien/form-ajoutertechnicien/form-ajoutertechnicien.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ListUtilisateurComponent } from './utilisateur/list-utilisateur/list-utilisateur.component';
import { FormAjouterutilisateurComponent } from './utilisateur/form-ajouterutilisateur/form-ajouterutilisateur.component';
import { PanneComponent } from './panne/panne.component';
import { ListPanneComponent } from './panne/list-panne/list-panne.component';
import { FormAjouterpanneComponent } from './panne/form-ajouterpanne/form-ajouterpanne.component';
import { EquipementComponent } from './equipement/equipement.component';
import { ListEquipementComponent } from './equipement/list-equipement/list-equipement.component';
import { FormAjouterequipementComponent } from './equipement/form-ajouterequipement/form-ajouterequipement.component';



@NgModule({
  declarations: [
    DashboardAdminComponent,
    TechnicienComponent,
    NavbarComponent,
    SidebarComponent,
    StatistiqueComponent,
    ListTechnicienComponent,
    FormAjoutertechnicienComponent,
    UtilisateurComponent,
    ListUtilisateurComponent,
    FormAjouterutilisateurComponent,
    PanneComponent,
    ListPanneComponent,
    FormAjouterpanneComponent,
    EquipementComponent,
    ListEquipementComponent,
    FormAjouterequipementComponent,

  ],
  exports: [
    DashboardAdminComponent,
    TechnicienComponent
  ],
  imports: [
    CommonModule,
    DashboardAdminRoutingModule,
    FormsModule,
  ]
})
export class DashboardAdminModule { }
