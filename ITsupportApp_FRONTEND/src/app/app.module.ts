import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {DashboardAdminComponent} from "./dashboard-admin/dashboard-admin.component";
import {DashboardAdminModule} from "./dashboard-admin/dashboard-admin.module";
import {TechnicienComponent} from "./dashboard-admin/technicien/technicien.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardAdminModule,
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
