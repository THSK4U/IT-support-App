import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../../../services/models/utilisateur";
import {ApiService} from "../../../services/services/api.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ApiConfiguration} from "../../../services/api-configuration";
import {deleteutilisateur, Deleteutilisateur$Params} from "../../../services/fn/operations/deleteutilisateur";

@Component({
  selector: 'app-list-utilisateur',
  templateUrl: './list-utilisateur.component.html',
  styleUrls: ['./list-utilisateur.component.css']
})
export class ListUtilisateurComponent implements OnInit{

  utilisateur: Utilisateur[] = [];
  showButton: boolean = false;



  constructor(
    private utilisateurService: ApiService,
    private router: Router,
    private http:HttpClient,
    private apiConfig: ApiConfiguration

  ) {}

  ngOnInit(): void {
    this.AllUtilisateurComponents();
    this.checkpath();
  }

  private AllUtilisateurComponents(): void {
    this.utilisateurService.getAllutilisateur().subscribe({
      next: (user) => {
        this.utilisateur = user;
      },
      error: (error: any) => {
        console.error('Error fetching technicians:', error);
      }
    });
  }

  private checkpath() {
    const url = this.router.url;
    this.showButton = url.includes('/Admin/Utilisateur');
  }
  deleteUtilisateur(id: number) {
    const params: Deleteutilisateur$Params = {id: id};
    deleteutilisateur(this.http, this.apiConfig.rootUrl, params).subscribe({
      next: () => {
        this.utilisateur = this.utilisateur.filter(p => p.id !== id);
        console.log('Utilisateur deleted successfully');
      },
      error: (err) => {
        console.error('Error deleting:', err);
      }
    });
  }
}
