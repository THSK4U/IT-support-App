import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {DashboardAdminModule} from "./dashboard-admin/dashboard-admin.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TokenService} from "./services/token/token.service";
import {AuthInterceptor} from "./auth-interceptor.interceptor";
import { DashboardUtilisateurComponent } from './dashboard-utilisateur/dashboard-utilisateur.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardUtilisateurComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardAdminModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,


  ],
  providers: [
    HttpClient,
    TokenService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
