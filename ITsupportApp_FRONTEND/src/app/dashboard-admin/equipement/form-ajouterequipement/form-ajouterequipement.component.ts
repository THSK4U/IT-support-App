import { Component } from '@angular/core';
import {ApiService} from "../../../services/services/api.service";
import {Router} from "@angular/router";
import {EquipementDto} from "../../../services/models/equipement-dto";

@Component({
  selector: 'app-form-ajouterequipement',
  templateUrl: './form-ajouterequipement.component.html',
  styleUrls: ['./form-ajouterequipement.component.css']
})
export class FormAjouterequipementComponent {


  equipement : EquipementDto = {
    dateAcquisition: '',
    description: '',
    imageUrl: '',
    nom: '',
    serialnumber: '',
    etat:'EN_SERVICE'
  };


  equipements: EquipementDto[] = [];

  constructor(
    private Services: ApiService,
    private router: Router
  ) {
  }
  save() {
    this.Services.createequipement({
      body: this.equipement
    }).subscribe({
      next: (response) => {
        console.log('Utilisateurs', response);
        this.equipements.push(response);
        this.rout();
      }
    })
  }

  private rout() {
    this.router.navigate(['Admin/Equipement'])
      .then(() => {
        window.location.reload();
      });
  }
}
