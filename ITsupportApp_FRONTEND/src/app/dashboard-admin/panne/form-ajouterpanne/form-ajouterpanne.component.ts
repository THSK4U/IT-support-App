import { Component } from '@angular/core';
import {ApiService} from "../../../services/services/api.service";
import {Router} from "@angular/router";
import {Panne} from "../../../services/models/panne";

@Component({
  selector: 'app-form-ajouterpanne',
  templateUrl: './form-ajouterpanne.component.html',
  styleUrls: ['./form-ajouterpanne.component.css']
})
export class FormAjouterpanneComponent {


  panne : Panne = { nom: '', description: ''};
  pannes: Panne[] = [];

  constructor(
    private Services: ApiService,
    private router: Router
  ) {
  }
  save() {
    this.Services.createpanne({
      body: this.panne
    }).subscribe({
      next: (response) => {
        console.log('panne', response);
        this.pannes.push(response);
        this.rout();
      }
    })
  }

  private rout() {
    this.router.navigate(['Admin/Panne'])
      .then(() => {
        window.location.reload();
      });
  }

}
