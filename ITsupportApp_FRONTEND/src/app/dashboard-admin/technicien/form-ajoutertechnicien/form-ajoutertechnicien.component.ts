import { Component } from '@angular/core';
import {Technicien} from "../../../services/models/technicien";

@Component({
  selector: 'app-form-ajoutertechnicien',
  templateUrl: './form-ajoutertechnicien.component.html',
  styleUrls: ['./form-ajoutertechnicien.component.css']
})
export class FormAjoutertechnicienComponent {
  isFormVisible: boolean = false;
  techniciens: Technicien[] = [];

  save() {

  }
}
