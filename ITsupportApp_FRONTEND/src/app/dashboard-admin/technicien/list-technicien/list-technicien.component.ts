import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/services/api.service';
import {Technicien} from "../../../services/models/technicien";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


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
    private http:HttpClient
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


}
