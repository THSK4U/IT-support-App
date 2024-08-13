import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/services/api.service';
import {Technicien} from "../../../services/models/technicien";
import {HttpClient} from "@angular/common/http";
import {ApiConfiguration} from "../../../services/api-configuration";
import {deleteTechnicien, DeleteTechnicien$Params} from "../../../services/fn/operations/delete-technicien";


@Component({
  selector: 'app-list-technicien',
  templateUrl: './list-technicien.component.html',
  styleUrls: ['./list-technicien.component.css']
})
export class ListTechnicienComponent implements OnInit {

  techniciens: Technicien[] = [];
  showButton: boolean = false;

  constructor(
    private technicienService: ApiService,
    private router: Router,
    private http:HttpClient,
    private apiConfig: ApiConfiguration

  ) {}

  ngOnInit(): void {
    this.AllTechnicienComponents();
    this.checkpath();
  }

  private AllTechnicienComponents(): void {
    this.technicienService.getAllTechniciens().subscribe({
      next: (Tech) => {
        this.techniciens = Tech;
      },
      error: (error: any) => {
        console.error('Error fetching technicians:', error);
      }
    });
  }

  private checkpath() {
    const url = this.router.url;
    this.showButton = url.includes('/Admin/Technicien');
  }

  deleteTechnicien(id: number) {
    const params: DeleteTechnicien$Params = {id: id};
    deleteTechnicien(this.http, this.apiConfig.rootUrl, params).subscribe({
      next: () => {
        this.techniciens = this.techniciens.filter(p => p.id !== id);
        console.log('Techniciens deleted successfully');
      },
      error: (err) => {
        console.error('Error deleting:', err);
      }
    });
  }

}
