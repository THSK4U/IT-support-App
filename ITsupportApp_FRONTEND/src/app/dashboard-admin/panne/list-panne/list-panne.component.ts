import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../../../services/models/utilisateur";
import {Panne} from "../../../services/models/panne";
import {ApiService} from "../../../services/services/api.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {deletepanne, Deletepanne$Params} from "../../../services/fn/operations/deletepanne";
import {ApiConfiguration} from "../../../services/api-configuration";
import {Updatepanne$Params} from "../../../services/fn/operations/updatepanne";
import {PanneDto} from "../../../services/models/panne-dto";

@Component({
  selector: 'app-list-panne',
  templateUrl: './list-panne.component.html',
  styleUrls: ['./list-panne.component.css']
})
export class ListPanneComponent implements OnInit{

  pannes: PanneDto[] = [];
  showButton: boolean = false;

  constructor(
    private panneService: ApiService,
    private router: Router,
    private http:HttpClient,
    private apiConfig: ApiConfiguration
  ) {}

  ngOnInit(): void {
    this.AllPanneComponents();
    this.checkpath();
  }

  private AllPanneComponents() {
    this.panneService.getAllpanne().subscribe({
      next: (panne) => {
        this.pannes = panne;
      },
      error: (error: any) => {
        console.error('Error fetching panne:', error);
      }
    });
  }

  private checkpath() {
    const url = this.router.url;
    this.showButton = url.includes('/Admin/Panne');
  }

  deletePanne(id: number) {
    const params: Deletepanne$Params = {id: id};
    deletepanne(this.http, this.apiConfig.rootUrl, params).subscribe({
      next: () => {
        this.pannes = this.pannes.filter(p => p.id !== id);
        console.log('Panne deleted successfully');
      },
      error: (err) => {
        console.error('Error deleting panne:', err);
      }
    });
  }

}
