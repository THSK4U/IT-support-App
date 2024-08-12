/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AuthenticationResponse } from '../models/authentication-response';
import { createequipement } from '../fn/operations/createequipement';
import { Createequipement$Params } from '../fn/operations/createequipement';
import { createpanne } from '../fn/operations/createpanne';
import { Createpanne$Params } from '../fn/operations/createpanne';
import { createTechnicien } from '../fn/operations/create-technicien';
import { CreateTechnicien$Params } from '../fn/operations/create-technicien';
import { createTicket } from '../fn/operations/create-ticket';
import { CreateTicket$Params } from '../fn/operations/create-ticket';
import { createutilisateur } from '../fn/operations/createutilisateur';
import { Createutilisateur$Params } from '../fn/operations/createutilisateur';
import { deleteequipement } from '../fn/operations/deleteequipement';
import { Deleteequipement$Params } from '../fn/operations/deleteequipement';
import { deletepanne } from '../fn/operations/deletepanne';
import { Deletepanne$Params } from '../fn/operations/deletepanne';
import { deleteTechnicien } from '../fn/operations/delete-technicien';
import { DeleteTechnicien$Params } from '../fn/operations/delete-technicien';
import { deleteTicket } from '../fn/operations/delete-ticket';
import { DeleteTicket$Params } from '../fn/operations/delete-ticket';
import { deleteutilisateur } from '../fn/operations/deleteutilisateur';
import { Deleteutilisateur$Params } from '../fn/operations/deleteutilisateur';
import { EquipementDto } from '../models/equipement-dto';
import { getAllequipement } from '../fn/operations/get-allequipement';
import { GetAllequipement$Params } from '../fn/operations/get-allequipement';
import { getAllpanne } from '../fn/operations/get-allpanne';
import { GetAllpanne$Params } from '../fn/operations/get-allpanne';
import { getAllTechniciens } from '../fn/operations/get-all-techniciens';
import { GetAllTechniciens$Params } from '../fn/operations/get-all-techniciens';
import { getAllTicket } from '../fn/operations/get-all-ticket';
import { GetAllTicket$Params } from '../fn/operations/get-all-ticket';
import { getAllutilisateur } from '../fn/operations/get-allutilisateur';
import { GetAllutilisateur$Params } from '../fn/operations/get-allutilisateur';
import { getByIdequipement } from '../fn/operations/get-by-idequipement';
import { GetByIdequipement$Params } from '../fn/operations/get-by-idequipement';
import { getByIdpanne } from '../fn/operations/get-by-idpanne';
import { GetByIdpanne$Params } from '../fn/operations/get-by-idpanne';
import { getByIdTicket } from '../fn/operations/get-by-id-ticket';
import { GetByIdTicket$Params } from '../fn/operations/get-by-id-ticket';
import { getTechnicienById } from '../fn/operations/get-technicien-by-id';
import { GetTechnicienById$Params } from '../fn/operations/get-technicien-by-id';
import { getTicketsByUsername } from '../fn/operations/get-tickets-by-username';
import { GetTicketsByUsername$Params } from '../fn/operations/get-tickets-by-username';
import { getutilisateurById } from '../fn/operations/getutilisateur-by-id';
import { GetutilisateurById$Params } from '../fn/operations/getutilisateur-by-id';
import { login } from '../fn/operations/login';
import { Login$Params } from '../fn/operations/login';
import { PanneDto } from '../models/panne-dto';
import { TechnicienDto } from '../models/technicien-dto';
import { TicketSupportDto } from '../models/ticket-support-dto';
import { updateequipement } from '../fn/operations/updateequipement';
import { Updateequipement$Params } from '../fn/operations/updateequipement';
import { updateEtatTicket } from '../fn/operations/update-etat-ticket';
import { UpdateEtatTicket$Params } from '../fn/operations/update-etat-ticket';
import { updatepanne } from '../fn/operations/updatepanne';
import { Updatepanne$Params } from '../fn/operations/updatepanne';
import { updateTechnicien } from '../fn/operations/update-technicien';
import { UpdateTechnicien$Params } from '../fn/operations/update-technicien';
import { updateTicket } from '../fn/operations/update-ticket';
import { UpdateTicket$Params } from '../fn/operations/update-ticket';
import { updateutilisateur } from '../fn/operations/updateutilisateur';
import { Updateutilisateur$Params } from '../fn/operations/updateutilisateur';
import { UtilisateurDto } from '../models/utilisateur-dto';

@Injectable({ providedIn: 'root' })
export class ApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAllTechniciens()` */
  static readonly GetAllTechniciensPath = '/admin/techniciens';

  /**
   * GET admin/techniciens.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllTechniciens()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTechniciens$Response(params?: GetAllTechniciens$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TechnicienDto>>> {
    return getAllTechniciens(this.http, this.rootUrl, params, context);
  }

  /**
   * GET admin/techniciens.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllTechniciens$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTechniciens(params?: GetAllTechniciens$Params, context?: HttpContext): Observable<Array<TechnicienDto>> {
    return this.getAllTechniciens$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TechnicienDto>>): Array<TechnicienDto> => r.body)
    );
  }

  /** Path part for operation `createTechnicien()` */
  static readonly CreateTechnicienPath = '/admin/techniciens/create';

  /**
   * POST admin/techniciens/create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createTechnicien()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTechnicien$Response(params: CreateTechnicien$Params, context?: HttpContext): Observable<StrictHttpResponse<TechnicienDto>> {
    return createTechnicien(this.http, this.rootUrl, params, context);
  }

  /**
   * POST admin/techniciens/create.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createTechnicien$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTechnicien(params: CreateTechnicien$Params, context?: HttpContext): Observable<TechnicienDto> {
    return this.createTechnicien$Response(params, context).pipe(
      map((r: StrictHttpResponse<TechnicienDto>): TechnicienDto => r.body)
    );
  }

  /** Path part for operation `deleteTechnicien()` */
  static readonly DeleteTechnicienPath = '/admin/techniciens/delete/{id}';

  /**
   * DELETE admin/techniciens/delete/{id}.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTechnicien()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTechnicien$Response(params: DeleteTechnicien$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteTechnicien(this.http, this.rootUrl, params, context);
  }

  /**
   * DELETE admin/techniciens/delete/{id}.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteTechnicien$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTechnicien(params: DeleteTechnicien$Params, context?: HttpContext): Observable<void> {
    return this.deleteTechnicien$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `updateTechnicien()` */
  static readonly UpdateTechnicienPath = '/admin/techniciens/update/{id}';

  /**
   * PUT admin/techniciens/update/{id}.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTechnicien()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTechnicien$Response(params: UpdateTechnicien$Params, context?: HttpContext): Observable<StrictHttpResponse<TechnicienDto>> {
    return updateTechnicien(this.http, this.rootUrl, params, context);
  }

  /**
   * PUT admin/techniciens/update/{id}.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTechnicien$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTechnicien(params: UpdateTechnicien$Params, context?: HttpContext): Observable<TechnicienDto> {
    return this.updateTechnicien$Response(params, context).pipe(
      map((r: StrictHttpResponse<TechnicienDto>): TechnicienDto => r.body)
    );
  }

  /** Path part for operation `getTechnicienById()` */
  static readonly GetTechnicienByIdPath = '/admin/techniciens/{id}';

  /**
   * GET admin/techniciens/{id}.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTechnicienById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTechnicienById$Response(params: GetTechnicienById$Params, context?: HttpContext): Observable<StrictHttpResponse<TechnicienDto>> {
    return getTechnicienById(this.http, this.rootUrl, params, context);
  }

  /**
   * GET admin/techniciens/{id}.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTechnicienById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTechnicienById(params: GetTechnicienById$Params, context?: HttpContext): Observable<TechnicienDto> {
    return this.getTechnicienById$Response(params, context).pipe(
      map((r: StrictHttpResponse<TechnicienDto>): TechnicienDto => r.body)
    );
  }

  /** Path part for operation `getAllutilisateur()` */
  static readonly GetAllutilisateurPath = '/admin/utilisateur';

  /**
   * GET admin/utilisateur.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllutilisateur()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllutilisateur$Response(params?: GetAllutilisateur$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UtilisateurDto>>> {
    return getAllutilisateur(this.http, this.rootUrl, params, context);
  }

  /**
   * GET admin/utilisateur.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllutilisateur$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllutilisateur(params?: GetAllutilisateur$Params, context?: HttpContext): Observable<Array<UtilisateurDto>> {
    return this.getAllutilisateur$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UtilisateurDto>>): Array<UtilisateurDto> => r.body)
    );
  }

  /** Path part for operation `createutilisateur()` */
  static readonly CreateutilisateurPath = '/admin/utilisateur/create';

  /**
   * POST admin/utilisateur/create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createutilisateur()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createutilisateur$Response(params: Createutilisateur$Params, context?: HttpContext): Observable<StrictHttpResponse<UtilisateurDto>> {
    return createutilisateur(this.http, this.rootUrl, params, context);
  }

  /**
   * POST admin/utilisateur/create.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createutilisateur$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createutilisateur(params: Createutilisateur$Params, context?: HttpContext): Observable<UtilisateurDto> {
    return this.createutilisateur$Response(params, context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>): UtilisateurDto => r.body)
    );
  }

  /** Path part for operation `deleteutilisateur()` */
  static readonly DeleteutilisateurPath = '/admin/utilisateur/delete/{id}';

  /**
   * DELETE admin/utilisateur/delete/{id}.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteutilisateur()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteutilisateur$Response(params: Deleteutilisateur$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteutilisateur(this.http, this.rootUrl, params, context);
  }

  /**
   * DELETE admin/utilisateur/delete/{id}.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteutilisateur$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteutilisateur(params: Deleteutilisateur$Params, context?: HttpContext): Observable<void> {
    return this.deleteutilisateur$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `updateutilisateur()` */
  static readonly UpdateutilisateurPath = '/admin/utilisateur/update/{id}';

  /**
   * PUT admin/utilisateur/update/{id}.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateutilisateur()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateutilisateur$Response(params: Updateutilisateur$Params, context?: HttpContext): Observable<StrictHttpResponse<UtilisateurDto>> {
    return updateutilisateur(this.http, this.rootUrl, params, context);
  }

  /**
   * PUT admin/utilisateur/update/{id}.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateutilisateur$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateutilisateur(params: Updateutilisateur$Params, context?: HttpContext): Observable<UtilisateurDto> {
    return this.updateutilisateur$Response(params, context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>): UtilisateurDto => r.body)
    );
  }

  /** Path part for operation `getutilisateurById()` */
  static readonly GetutilisateurByIdPath = '/admin/utilisateur/{id}';

  /**
   * GET admin/utilisateur/{id}.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getutilisateurById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getutilisateurById$Response(params: GetutilisateurById$Params, context?: HttpContext): Observable<StrictHttpResponse<UtilisateurDto>> {
    return getutilisateurById(this.http, this.rootUrl, params, context);
  }

  /**
   * GET admin/utilisateur/{id}.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getutilisateurById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getutilisateurById(params: GetutilisateurById$Params, context?: HttpContext): Observable<UtilisateurDto> {
    return this.getutilisateurById$Response(params, context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>): UtilisateurDto => r.body)
    );
  }

  /** Path part for operation `login()` */
  static readonly LoginPath = '/login';

  /**
   * POST login.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `login()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login$Response(params: Login$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthenticationResponse>> {
    return login(this.http, this.rootUrl, params, context);
  }

  /**
   * POST login.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `login$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login(params: Login$Params, context?: HttpContext): Observable<AuthenticationResponse> {
    return this.login$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuthenticationResponse>): AuthenticationResponse => r.body)
    );
  }

  /** Path part for operation `createpanne()` */
  static readonly CreatepannePath = '/admin/panne/create';

  /**
   * POST admin/panne/create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createpanne()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createpanne$Response(params: Createpanne$Params, context?: HttpContext): Observable<StrictHttpResponse<PanneDto>> {
    return createpanne(this.http, this.rootUrl, params, context);
  }

  /**
   * POST admin/panne/create.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createpanne$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createpanne(params: Createpanne$Params, context?: HttpContext): Observable<PanneDto> {
    return this.createpanne$Response(params, context).pipe(
      map((r: StrictHttpResponse<PanneDto>): PanneDto => r.body)
    );
  }

  /** Path part for operation `deletepanne()` */
  static readonly DeletepannePath = '/admin/panne/delete/{id}';

  /**
   * DELETE admin/panne/delete/{id}.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletepanne()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletepanne$Response(params: Deletepanne$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletepanne(this.http, this.rootUrl, params, context);
  }

  /**
   * DELETE admin/panne/delete/{id}.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletepanne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletepanne(params: Deletepanne$Params, context?: HttpContext): Observable<void> {
    return this.deletepanne$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `updatepanne()` */
  static readonly UpdatepannePath = '/admin/panne/update/{id}';

  /**
   * PUT admin/panne/update/{id}.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatepanne()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatepanne$Response(params: Updatepanne$Params, context?: HttpContext): Observable<StrictHttpResponse<PanneDto>> {
    return updatepanne(this.http, this.rootUrl, params, context);
  }

  /**
   * PUT admin/panne/update/{id}.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updatepanne$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatepanne(params: Updatepanne$Params, context?: HttpContext): Observable<PanneDto> {
    return this.updatepanne$Response(params, context).pipe(
      map((r: StrictHttpResponse<PanneDto>): PanneDto => r.body)
    );
  }

  /** Path part for operation `getByIdpanne()` */
  static readonly GetByIdpannePath = '/admin/panne/{id}';

  /**
   * GET admin/panne/{id}.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getByIdpanne()` instead.
   *
   * This method doesn't expect any request body.
   */
  getByIdpanne$Response(params: GetByIdpanne$Params, context?: HttpContext): Observable<StrictHttpResponse<PanneDto>> {
    return getByIdpanne(this.http, this.rootUrl, params, context);
  }

  /**
   * GET admin/panne/{id}.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getByIdpanne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getByIdpanne(params: GetByIdpanne$Params, context?: HttpContext): Observable<PanneDto> {
    return this.getByIdpanne$Response(params, context).pipe(
      map((r: StrictHttpResponse<PanneDto>): PanneDto => r.body)
    );
  }

  /** Path part for operation `getAllpanne()` */
  static readonly GetAllpannePath = '/adminuser/panne';

  /**
   * GET adminuser/panne.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllpanne()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllpanne$Response(params?: GetAllpanne$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PanneDto>>> {
    return getAllpanne(this.http, this.rootUrl, params, context);
  }

  /**
   * GET adminuser/panne.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllpanne$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllpanne(params?: GetAllpanne$Params, context?: HttpContext): Observable<Array<PanneDto>> {
    return this.getAllpanne$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PanneDto>>): Array<PanneDto> => r.body)
    );
  }

  /** Path part for operation `createequipement()` */
  static readonly CreateequipementPath = '/admin/Equipement/create';

  /**
   * POST admin/Equipement/create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createequipement()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createequipement$Response(params: Createequipement$Params, context?: HttpContext): Observable<StrictHttpResponse<EquipementDto>> {
    return createequipement(this.http, this.rootUrl, params, context);
  }

  /**
   * POST admin/Equipement/create.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createequipement$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createequipement(params: Createequipement$Params, context?: HttpContext): Observable<EquipementDto> {
    return this.createequipement$Response(params, context).pipe(
      map((r: StrictHttpResponse<EquipementDto>): EquipementDto => r.body)
    );
  }

  /** Path part for operation `deleteequipement()` */
  static readonly DeleteequipementPath = '/admin/Equipement/delete/{id}';

  /**
   * DELETE admin/Equipement/delete/{id}.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteequipement()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteequipement$Response(params: Deleteequipement$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteequipement(this.http, this.rootUrl, params, context);
  }

  /**
   * DELETE admin/Equipement/delete/{id}.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteequipement$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteequipement(params: Deleteequipement$Params, context?: HttpContext): Observable<void> {
    return this.deleteequipement$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `updateequipement()` */
  static readonly UpdateequipementPath = '/admin/Equipement/update/{id}';

  /**
   * PUT admin/Equipement/update/{id}.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateequipement()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateequipement$Response(params: Updateequipement$Params, context?: HttpContext): Observable<StrictHttpResponse<EquipementDto>> {
    return updateequipement(this.http, this.rootUrl, params, context);
  }

  /**
   * PUT admin/Equipement/update/{id}.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateequipement$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateequipement(params: Updateequipement$Params, context?: HttpContext): Observable<EquipementDto> {
    return this.updateequipement$Response(params, context).pipe(
      map((r: StrictHttpResponse<EquipementDto>): EquipementDto => r.body)
    );
  }

  /** Path part for operation `getByIdequipement()` */
  static readonly GetByIdequipementPath = '/admin/Equipement/{id}';

  /**
   * GET admin/Equipement/{id}.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getByIdequipement()` instead.
   *
   * This method doesn't expect any request body.
   */
  getByIdequipement$Response(params: GetByIdequipement$Params, context?: HttpContext): Observable<StrictHttpResponse<EquipementDto>> {
    return getByIdequipement(this.http, this.rootUrl, params, context);
  }

  /**
   * GET admin/Equipement/{id}.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getByIdequipement$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getByIdequipement(params: GetByIdequipement$Params, context?: HttpContext): Observable<EquipementDto> {
    return this.getByIdequipement$Response(params, context).pipe(
      map((r: StrictHttpResponse<EquipementDto>): EquipementDto => r.body)
    );
  }

  /** Path part for operation `getAllequipement()` */
  static readonly GetAllequipementPath = '/adminuser/Equipement';

  /**
   * GET adminuser/Equipement.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllequipement()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllequipement$Response(params?: GetAllequipement$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<EquipementDto>>> {
    return getAllequipement(this.http, this.rootUrl, params, context);
  }

  /**
   * GET adminuser/Equipement.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllequipement$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllequipement(params?: GetAllequipement$Params, context?: HttpContext): Observable<Array<EquipementDto>> {
    return this.getAllequipement$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<EquipementDto>>): Array<EquipementDto> => r.body)
    );
  }

  /** Path part for operation `getAllTicket()` */
  static readonly GetAllTicketPath = '/admin/Ticket';

  /**
   * GET admin/Ticket.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllTicket()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTicket$Response(params?: GetAllTicket$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TicketSupportDto>>> {
    return getAllTicket(this.http, this.rootUrl, params, context);
  }

  /**
   * GET admin/Ticket.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllTicket$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTicket(params?: GetAllTicket$Params, context?: HttpContext): Observable<Array<TicketSupportDto>> {
    return this.getAllTicket$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TicketSupportDto>>): Array<TicketSupportDto> => r.body)
    );
  }

  /** Path part for operation `deleteTicket()` */
  static readonly DeleteTicketPath = '/admin/Ticket/delete/{id}';

  /**
   * DELETE admin/Ticket/delete/{id}.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTicket()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTicket$Response(params: DeleteTicket$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteTicket(this.http, this.rootUrl, params, context);
  }

  /**
   * DELETE admin/Ticket/delete/{id}.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteTicket$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTicket(params: DeleteTicket$Params, context?: HttpContext): Observable<void> {
    return this.deleteTicket$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `updateTicket()` */
  static readonly UpdateTicketPath = '/admin/Ticket/update/{id}';

  /**
   * PUT admin/Ticket/update/{id}.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTicket()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTicket$Response(params: UpdateTicket$Params, context?: HttpContext): Observable<StrictHttpResponse<TicketSupportDto>> {
    return updateTicket(this.http, this.rootUrl, params, context);
  }

  /**
   * PUT admin/Ticket/update/{id}.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTicket$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTicket(params: UpdateTicket$Params, context?: HttpContext): Observable<TicketSupportDto> {
    return this.updateTicket$Response(params, context).pipe(
      map((r: StrictHttpResponse<TicketSupportDto>): TicketSupportDto => r.body)
    );
  }

  /** Path part for operation `getByIdTicket()` */
  static readonly GetByIdTicketPath = '/admin/Ticket/{id}';

  /**
   * GET admin/Ticket/{id}.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getByIdTicket()` instead.
   *
   * This method doesn't expect any request body.
   */
  getByIdTicket$Response(params: GetByIdTicket$Params, context?: HttpContext): Observable<StrictHttpResponse<TicketSupportDto>> {
    return getByIdTicket(this.http, this.rootUrl, params, context);
  }

  /**
   * GET admin/Ticket/{id}.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getByIdTicket$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getByIdTicket(params: GetByIdTicket$Params, context?: HttpContext): Observable<TicketSupportDto> {
    return this.getByIdTicket$Response(params, context).pipe(
      map((r: StrictHttpResponse<TicketSupportDto>): TicketSupportDto => r.body)
    );
  }

  /** Path part for operation `updateEtatTicket()` */
  static readonly UpdateEtatTicketPath = '/admintech/Ticket/updateetat/{id}';

  /**
   * PUT admintech/Ticket/updateetat/{id}.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateEtatTicket()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEtatTicket$Response(params: UpdateEtatTicket$Params, context?: HttpContext): Observable<StrictHttpResponse<TicketSupportDto>> {
    return updateEtatTicket(this.http, this.rootUrl, params, context);
  }

  /**
   * PUT admintech/Ticket/updateetat/{id}.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateEtatTicket$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEtatTicket(params: UpdateEtatTicket$Params, context?: HttpContext): Observable<TicketSupportDto> {
    return this.updateEtatTicket$Response(params, context).pipe(
      map((r: StrictHttpResponse<TicketSupportDto>): TicketSupportDto => r.body)
    );
  }

  /** Path part for operation `createTicket()` */
  static readonly CreateTicketPath = '/user/Ticket/create';

  /**
   * POST user/Ticket/create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createTicket()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTicket$Response(params: CreateTicket$Params, context?: HttpContext): Observable<StrictHttpResponse<TicketSupportDto>> {
    return createTicket(this.http, this.rootUrl, params, context);
  }

  /**
   * POST user/Ticket/create.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createTicket$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTicket(params: CreateTicket$Params, context?: HttpContext): Observable<TicketSupportDto> {
    return this.createTicket$Response(params, context).pipe(
      map((r: StrictHttpResponse<TicketSupportDto>): TicketSupportDto => r.body)
    );
  }

  /** Path part for operation `getTicketsByUsername()` */
  static readonly GetTicketsByUsernamePath = '/user/{username}';

  /**
   * GET user/{username}.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTicketsByUsername()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTicketsByUsername$Response(params: GetTicketsByUsername$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TicketSupportDto>>> {
    return getTicketsByUsername(this.http, this.rootUrl, params, context);
  }

  /**
   * GET user/{username}.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTicketsByUsername$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTicketsByUsername(params: GetTicketsByUsername$Params, context?: HttpContext): Observable<Array<TicketSupportDto>> {
    return this.getTicketsByUsername$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TicketSupportDto>>): Array<TicketSupportDto> => r.body)
    );
  }

}
