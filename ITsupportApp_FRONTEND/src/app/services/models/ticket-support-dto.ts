/* tslint:disable */
/* eslint-disable */
import { Equipement } from '../models/equipement';
import { Panne } from '../models/panne';
import { Technicien } from '../models/technicien';
import { Utilisateur } from '../models/utilisateur';
export interface TicketSupportDto {
  dateCreation?: string;
  description: string;
  equipement: Equipement;
  etat: 'A_FAIRE' | 'EN_COURS' | 'TERMINE';
  id?: number;
  panne: Panne;
  technicien: Technicien ;
  utilisateur: Utilisateur;
}
