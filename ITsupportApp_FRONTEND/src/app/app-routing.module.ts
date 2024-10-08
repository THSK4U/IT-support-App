import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'Admin',
    loadChildren: () =>
      import('./dashboard-admin/dashboard-admin.module').then((m) => m.DashboardAdminModule),
  },
  {
    path: 'Utilisateur',
    loadChildren: () =>
      import('./dashboard-utilisateur/dashboard-utilisateur.module').then((m) => m.DashboardUtilisateurModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
