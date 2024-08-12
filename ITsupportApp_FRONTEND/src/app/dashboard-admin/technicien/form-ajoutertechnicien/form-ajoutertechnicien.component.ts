import {AfterViewInit, Component} from '@angular/core';
import {Technicien} from "../../../services/models/technicien";
import {TechnicienDto} from "../../../services/models/technicien-dto";
import {ApiService} from "../../../services/services/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-ajoutertechnicien',
  templateUrl: './form-ajoutertechnicien.component.html',
  styleUrls: ['./form-ajoutertechnicien.component.css']
})
export class FormAjoutertechnicienComponent{

  technicien : TechnicienDto = { email: '', password: '', username: '' };
  techniciens: Technicien[] = [];
  hidePassword = true;

  constructor(
  private technicienService: ApiService,
  private router: Router
  ) {
  }
  save() {
  this.technicienService.createTechnicien({
    body: this.technicien
  }).subscribe({
    next: (response) => {
      console.log('Technicien', response);
      this.techniciens.push(response);
      this.rout();
    }
  })
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }



  private rout() {
    this.router.navigate(['Admin/Technicien'])
      .then(() => {
        window.location.reload();
      });
  }
}
