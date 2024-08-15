import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../services/services/api.service";
import {Router} from "@angular/router";
import {TicketSupportDto} from "../../../services/models/ticket-support-dto";
import {EquipementDto} from "../../../services/models/equipement-dto";
import {PanneDto} from "../../../services/models/panne-dto";

@Component({
  selector: 'app-form-ajouterTicket',
  templateUrl: './form-ajouterTicket.component.html',
  styleUrls: ['./form-ajouterTicket.component.css']
})
export class FormAjouterTicketComponent implements OnInit {
  equipmentsDto : EquipementDto[]= [];
  pannesDto : PanneDto[]= [];
  ticket: TicketSupportDto = {
    equipement: { id: 0 },
    utilisateur: { id: 46 },
    description: '',
    panne: { id: 0 },
    etat: 'A_FAIRE',
    technicien: { id: 0 },
  } ;

  ngOnInit(): void {
    console.log(this.ticket);
    console.log(this.equipmentsDto);
    console.log(this.pannesDto);
  }

  ticketSupportDto: TicketSupportDto[] = [];

  constructor(
    private Services: ApiService,
    private router: Router
  ) {
  }
  save() {
    this.Services.createTicket({
      body: this.ticket
    }).subscribe({
      next: (response) => {
        console.log('Ticket', response);
        this.ticketSupportDto.push(response);
        this.rout();
      }
    })
  }

  private rout() {
    this.router.navigate(['Utilisateur'])
      .then(() => {
        window.location.reload();
      });
  }

}
