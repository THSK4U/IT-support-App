import { Component } from '@angular/core';
import {ApiService} from "../../../services/services/api.service";
import {Router} from "@angular/router";
import {Utilisateur} from "../../../services/models/utilisateur";

@Component({
  selector: 'app-form-ajouterutilisateur',
  templateUrl: './form-ajouterutilisateur.component.html',
  styleUrls: ['./form-ajouterutilisateur.component.css']
})
export class FormAjouterutilisateurComponent {


  user : Utilisateur = { email: '', password: '', username: '' };
  Utilisateur: Utilisateur[] = [];
  hidePassword = true;

  constructor(
    private UtilisateurServices: ApiService,
    private router: Router
  ) {
  }
  save() {
    this.UtilisateurServices.createutilisateur({
      body: this.user
    }).subscribe({
      next: (response) => {
        console.log('Utilisateurs', response);
        this.Utilisateur.push(response);
        this.rout();
      }
    })
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }



  private rout() {
    this.router.navigate(['Admin/Utilisateur'])
      .then(() => {
        window.location.reload();
      });
  }
}
