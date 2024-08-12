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


@NgModule({
  declarations: [
    DashboardAdminComponent,
    TechnicienComponent,
    NavbarComponent,
    SidebarComponent,
    StatistiqueComponent,
    ListTechnicienComponent
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