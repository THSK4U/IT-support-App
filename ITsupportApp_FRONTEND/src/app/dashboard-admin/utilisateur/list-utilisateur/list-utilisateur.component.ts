import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../../../services/models/utilisateur";
import {ApiService} from "../../../services/services/api.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

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
    private http:HttpClient
  ) {}

  ngOnInit(): void {
    this.AllTechnicienComponents();
    this.checkpath();
  }

  private AllTechnicienComponents(): void {
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
}
