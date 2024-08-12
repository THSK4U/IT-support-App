import {AfterViewInit, Component} from '@angular/core';
import {Technicien} from "../../../services/models/technicien";
import {TechnicienDto} from "../../../services/models/technicien-dto";
import {ApiService} from "../../../services/services/api.service";
import {Router} from "@angular/router";
import {PersonneDto} from "../../../services/models/personne-dto";
import {Utilisateur} from "../../../services/models/utilisateur";

@Component({
  selector: 'app-form-ajoutertechnicien',
  templateUrl: './form-ajoutertechnicien.component.html',
  styleUrls: ['./form-ajoutertechnicien.component.css']
})
export class FormAjoutertechnicienComponent{

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
