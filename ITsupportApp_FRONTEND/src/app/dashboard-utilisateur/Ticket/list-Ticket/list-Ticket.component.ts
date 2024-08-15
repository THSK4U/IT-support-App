import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../services/services/api.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ApiConfiguration} from "../../../services/api-configuration";
import {TicketSupportDto} from "../../../services/models/ticket-support-dto";
import {tick} from "@angular/core/testing";

@Component({
  selector: 'app-list-Ticket',
  templateUrl: './list-Ticket.component.html',
  styleUrls: ['./list-Ticket.component.css']
})
export class ListTicketComponent implements OnInit{

  ticket: TicketSupportDto[] = [];
  showButton: boolean = false;


  constructor(
    private Service: ApiService,
    private router: Router,
    private http:HttpClient,
    private apiConfig: ApiConfiguration

  ) {}

  ngOnInit(): void {
    this.AllTicketComponents();
    this.checkpath();
  }

  private AllTicketComponents(): void {
    this.Service.getAllTicket().subscribe({
      next: (Ticket) => {
        this.ticket = Ticket;
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



  selectedEquipementId!: number;

  // openUpdateModal(id: number = 0) {
  //   this.selectedEquipementId = id;
  //   this.fetchEquipementById(this.selectedEquipementId)
  // }
  //
  // private fetchEquipementById(id: number): void {
  //   const params: GetByIdequipement$Params = { id };
  //   this.Service.getByIdequipement(params).subscribe({
  //     next: (equipements: EquipementDto) => {
  //       this.eq = equipements;
  //       console.error(equipements);
  //     },
  //     error: (err) => {
  //       console.error('Error fetching Equipement:', err);
  //     }
  //   });
  // }
  protected readonly tick = tick;
}
