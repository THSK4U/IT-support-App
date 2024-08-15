import {Component, Input, OnInit} from '@angular/core';
import { EquipementDto } from "../../../services/models/equipement-dto";
import { ApiService } from "../../../services/services/api.service";
import { Router } from "@angular/router";
import { updateequipement, Updateequipement$Params } from "../../../services/fn/operations/updateequipement";
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-form-update-equipement',
  templateUrl: './form-update-equipement.component.html',
  styleUrls: ['./form-update-equipement.component.css']
})
export class FormUpdateEquipementComponent implements OnInit{
  @Input() id: number | undefined;
  @Input() eq?: EquipementDto;

  ngOnInit(): void {
  }

  constructor(
    private Services: ApiService,
    private router: Router,
    private http: HttpClient
  ) {}


  onSubmit() {
    this.updateequipement(this.eq);
    this.router.navigate(['Admin/Equipement'])
  }

  private rout() {
    this.router.navigate(['Admin/Equipement'])
      .then(() => {
        window.location.reload();
      });
  }

  updateequipement(equipement?: EquipementDto) {
    if (!this.id) {
      console.error('Equipement ID is missing');
      return;
    }
    const params: Updateequipement$Params = { id: this.id, body: equipement };
    updateequipement(this.http, this.Services.rootUrl, params).subscribe({
      next: (response) => {
        console.log('Equipement updated successfully:', response.body)
        this.rout()
      },
      error: (err) => {
        console.error('Error updating:', err);
      }
    });
  }


}
