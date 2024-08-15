import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../services/services/api.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ApiConfiguration} from "../../../services/api-configuration";
import {EquipementDto} from "../../../services/models/equipement-dto";
import {deleteequipement, Deleteequipement$Params} from "../../../services/fn/operations/deleteequipement";
import {GetByIdequipement$Params} from "../../../services/fn/operations/get-by-idequipement";

@Component({
  selector: 'app-list-equipement',
  templateUrl: './list-equipement.component.html',
  styleUrls: ['./list-equipement.component.css']
})
export class ListEquipementComponent implements OnInit{

  equipement: EquipementDto[] = [];
  showButton: boolean = false;

  eq: EquipementDto = {
    dateAcquisition: '',
    description: '',
    imageUrl: '',
    nom: '',
    serialnumber: '',
    etat: 'EN_SERVICE'
  };


  constructor(
    private Service: ApiService,
    private router: Router,
    private http:HttpClient,
    private apiConfig: ApiConfiguration

  ) {}

  ngOnInit(): void {
    this.AllEquipementComponents();
    this.checkpath();
  }

  private AllEquipementComponents(): void {
    this.Service.getAllequipement().subscribe({
      next: (Equipement) => {
        this.equipement = Equipement;
      },
      error: (error: any) => {
        console.error('Error fetching Equipement:', error);
      }
    });
  }

  private checkpath() {
    const url = this.router.url;
    this.showButton = url.includes('/Admin/Equipement');
  }

  deleteequipement(id: number) {
    const params: Deleteequipement$Params = {id: id};
    deleteequipement(this.http, this.apiConfig.rootUrl, params).subscribe({
      next: () => {
        this.equipement = this.equipement.filter(p => p.id !== id);
        console.log('Equipement deleted successfully');
      },
      error: (err) => {
        console.error('Error deleting:', err);
      }
    });
  }

  selectedEquipementId!: number;

  openUpdateModal(id: number = 0) {
    this.selectedEquipementId = id;
    this.fetchEquipementById(this.selectedEquipementId)
  }

  private fetchEquipementById(id: number): void {
    const params: GetByIdequipement$Params = { id };
    this.Service.getByIdequipement(params).subscribe({
      next: (equipements: EquipementDto) => {
        this.eq = equipements;
        console.error(equipements);
      },
      error: (err) => {
        console.error('Error fetching Equipement:', err);
      }
    });
  }
}
