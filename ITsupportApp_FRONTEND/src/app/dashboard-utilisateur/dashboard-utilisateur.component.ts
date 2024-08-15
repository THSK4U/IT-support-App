import { Component } from '@angular/core';
import {TokenService} from "../services/token/token.service";

@Component({
  selector: 'app-dashboard-utilisateur',
  templateUrl: './dashboard-utilisateur.component.html',
  styleUrls: ['./dashboard-utilisateur.component.css']
})
export class DashboardUtilisateurComponent {

  constructor(
    private service: TokenService,
  ) {
  }

  logout() {
    this.service.logout();

  }
}
