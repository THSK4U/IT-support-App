import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../../../services/models/utilisateur";
import {Panne} from "../../../services/models/panne";
import {ApiService} from "../../../services/services/api.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-list-panne',
  templateUrl: './list-panne.component.html',
  styleUrls: ['./list-panne.component.css']
})
export class ListPanneComponent implements OnInit{

  pannes: Panne[] = [];
  showButton: boolean = false;

  constructor(
    private panneService: ApiService,
    private router: Router,
    private http:HttpClient
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
}
