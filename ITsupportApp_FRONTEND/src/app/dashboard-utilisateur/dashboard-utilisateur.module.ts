import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardUtilisateurRoutingModule } from './dashboard-utilisateur-routing.module';
import {FormAjouterTicketComponent} from "./Ticket/form-ajouterTicket/form-ajouterTicket.component";
import {FormsModule} from "@angular/forms";
import {TicketComponent} from "./Ticket/Ticket.component";
import {ListTicketComponent} from "./Ticket/list-Ticket/list-Ticket.component";
import {DashboardAdminModule} from "../dashboard-admin/dashboard-admin.module";


@NgModule({
  declarations: [
    FormAjouterTicketComponent,
    TicketComponent,
    ListTicketComponent

  ],
  exports: [
    TicketComponent
  ],
  imports: [
    CommonModule,
    DashboardUtilisateurRoutingModule,
    FormsModule,
    DashboardAdminModule
  ]
})
export class DashboardUtilisateurModule { }
