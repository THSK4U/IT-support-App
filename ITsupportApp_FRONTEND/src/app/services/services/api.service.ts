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
import { create } from '../fn/operations/create';
import { create_1 } from '../fn/operations/create-1';
import { Create_1$Params } from '../fn/operations/create-1';
import { create_2 } from '../fn/operations/create-2';
import { Create_2$Params } from '../fn/operations/create-2';
import { Create$Params } from '../fn/operations/create';
import { createTechnicien } from '../fn/operations/create-technicien';
import { createTechnicien_1 } from '../fn/operations/create-technicien-1';
import { CreateTechnicien_1$Params } from '../fn/operations/create-technicien-1';
import { CreateTechnicien$Params } from '../fn/operations/create-technicien';
import { delete_1 } from '../fn/operations/delete-1';
import { Delete_1$Params } from '../fn/operations/delete-1';
import { delete_2 } from '../fn/operations/delete-2';
import { Delete_2$Params } from '../fn/operations/delete-2';
import { delete$ } from '../fn/operations/delete';
import { Delete$Params } from '../fn/operations/delete';
import { deleteTechnicien } from '../fn/operations/delete-technicien';
import { deleteTechnicien_1 } from '../fn/operations/delete-technicien-1';
import { DeleteTechnicien_1$Params } from '../fn/operations/delete-technicien-1';
import { DeleteTechnicien$Params } from '../fn/operations/delete-technicien';
import { EquipementDto } from '../models/equipement-dto';
import { getAll } from '../fn/operations/get-all';
import { getAll_1 } from '../fn/operations/get-all-1';
import { GetAll_1$Params } from '../fn/operations/get-all-1';
import { getAll_2 } from '../fn/operations/get-all-2';
import { GetAll_2$Params } from '../fn/operations/get-all-2';
import { GetAll$Params } from '../fn/operations/get-all';
import { getAllTechniciens } from '../fn/operations/get-all-techniciens';
import { getAllTechniciens_1 } from '../fn/operations/get-all-techniciens-1';
import { GetAllTechniciens_1$Params } from '../fn/operations/get-all-techniciens-1';
import { GetAllTechniciens$Params } from '../fn/operations/get-all-techniciens';
import { getById } from '../fn/operations/get-by-id';
import { getById_1 } from '../fn/operations/get-by-id-1';
import { GetById_1$Params } from '../fn/operations/get-by-id-1';
import { getById_2 } from '../fn/operations/get-by-id-2';
import { GetById_2$Params } from '../fn/operations/get-by-id-2';
import { GetById$Params } from '../fn/operations/get-by-id';
import { getTechnicienById } from '../fn/operations/get-technicien-by-id';
import { getTechnicienById_1 } from '../fn/operations/get-technicien-by-id-1';
import { GetTechnicienById_1$Params } from '../fn/operations/get-technicien-by-id-1';
import { GetTechnicienById$Params } from '../fn/operations/get-technicien-by-id';
import { getTicketsByUsername } from '../fn/operations/get-tickets-by-username';
import { GetTicketsByUsername$Params } from '../fn/operations/get-tickets-by-username';
import { login } from '../fn/operations/login';
import { Login$Params } from '../fn/operations/login';
import { PanneDto } from '../models/panne-dto';
import { TechnicienDto } from '../models/technicien-dto';
import { TicketSupportDto } from '../models/ticket-support-dto';
import { update } from '../fn/operations/update';
import { update_1 } from '../fn/operations/update-1';
import { Update_1$Params } from '../fn/operations/update-1';
import { update_2 } from '../fn/operations/update-2';
import { Update_2$Params } from '../fn/operations/update-2';
import { Update$Params } from '../fn/operations/update';
import { updateEtat } from '../fn/operations/update-etat';
import { UpdateEtat$Params } from '../fn/operations/update-etat';
import { updateTechnicien } from '../fn/operations/update-technicien';
import { updateTechnicien_1 } from '../fn/operations/update-technicien-1';
import { UpdateTechnicien_1$Params } from '../fn/operations/update-technicien-1';
import { UpdateTechnicien$Params } from '../fn/operations/update-technicien';
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

  /** Path part for operation `getAllTechniciens_1()` */
  static readonly GetAllTechniciens_1Path = '/admin/utilisateur';

  /**
   * GET admin/utilisateur.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllTechniciens_1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTechniciens_1$Response(params?: GetAllTechniciens_1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UtilisateurDto>>> {
    return getAllTechniciens_1(this.http, this.rootUrl, params, context);
  }

  /**
   * GET admin/utilisateur.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllTechniciens_1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTechniciens_1(params?: GetAllTechniciens_1$Params, context?: HttpContext): Observable<Array<UtilisateurDto>> {
    return this.getAllTechniciens_1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UtilisateurDto>>): Array<UtilisateurDto> => r.body)
    );
  }

  /** Path part for operation `createTechnicien_1()` */
  static readonly CreateTechnicien_1Path = '/admin/utilisateur/create';

  /**
   * POST admin/utilisateur/create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createTechnicien_1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTechnicien_1$Response(params: CreateTechnicien_1$Params, context?: HttpContext): Observable<StrictHttpResponse<UtilisateurDto>> {
    return createTechnicien_1(this.http, this.rootUrl, params, context);
  }

  /**
   * POST admin/utilisateur/create.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createTechnicien_1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTechnicien_1(params: CreateTechnicien_1$Params, context?: HttpContext): Observable<UtilisateurDto> {
    return this.createTechnicien_1$Response(params, context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>): UtilisateurDto => r.body)
    );
  }

  /** Path part for operation `deleteTechnicien_1()` */
  static readonly DeleteTechnicien_1Path = '/admin/utilisateur/delete/{id}';

  /**
   * DELETE admin/utilisateur/delete/{id}.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTechnicien_1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTechnicien_1$Response(params: DeleteTechnicien_1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteTechnicien_1(this.http, this.rootUrl, params, context);
  }

  /**
   * DELETE admin/utilisateur/delete/{id}.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteTechnicien_1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTechnicien_1(params: DeleteTechnicien_1$Params, context?: HttpContext): Observable<void> {
    return this.deleteTechnicien_1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `updateTechnicien_1()` */
  static readonly UpdateTechnicien_1Path = '/admin/utilisateur/update/{id}';

  /**
   * PUT admin/utilisateur/update/{id}.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTechnicien_1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTechnicien_1$Response(params: UpdateTechnicien_1$Params, context?: HttpContext): Observable<StrictHttpResponse<UtilisateurDto>> {
    return updateTechnicien_1(this.http, this.rootUrl, params, context);
  }

  /**
   * PUT admin/utilisateur/update/{id}.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTechnicien_1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTechnicien_1(params: UpdateTechnicien_1$Params, context?: HttpContext): Observable<UtilisateurDto> {
    return this.updateTechnicien_1$Response(params, context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>): UtilisateurDto => r.body)
    );
  }

  /** Path part for operation `getTechnicienById_1()` */
  static readonly GetTechnicienById_1Path = '/admin/utilisateur/{id}';

  /**
   * GET admin/utilisateur/{id}.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTechnicienById_1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTechnicienById_1$Response(params: GetTechnicienById_1$Params, context?: HttpContext): Observable<StrictHttpResponse<UtilisateurDto>> {
    return getTechnicienById_1(this.http, this.rootUrl, params, context);
  }

  /**
   * GET admin/utilisateur/{id}.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTechnicienById_1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTechnicienById_1(params: GetTechnicienById_1$Params, context?: HttpContext): Observable<UtilisateurDto> {
    return this.getTechnicienById_1$Response(params, context).pipe(
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

  /** Path part for operation `create()` */
  static readonly CreatePath = '/admin/panne/create';

  /**
   * POST admin/panne/create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create$Response(params: Create$Params, context?: HttpContext): Observable<StrictHttpResponse<PanneDto>> {
    return create(this.http, this.rootUrl, params, context);
  }

  /**
   * POST admin/panne/create.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `create$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create(params: Create$Params, context?: HttpContext): Observable<PanneDto> {
    return this.create$Response(params, context).pipe(
      map((r: StrictHttpResponse<PanneDto>): PanneDto => r.body)
    );
  }

  /** Path part for operation `delete()` */
  static readonly DeletePath = '/admin/panne/delete/{id}';

  /**
   * DELETE admin/panne/delete/{id}.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete$Response(params: Delete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete$(this.http, this.rootUrl, params, context);
  }

  /**
   * DELETE admin/panne/delete/{id}.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete(params: Delete$Params, context?: HttpContext): Observable<void> {
    return this.delete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `update()` */
  static readonly UpdatePath = '/admin/panne/update/{id}';

  /**
   * PUT admin/panne/update/{id}.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update$Response(params: Update$Params, context?: HttpContext): Observable<StrictHttpResponse<PanneDto>> {
    return update(this.http, this.rootUrl, params, context);
  }

  /**
   * PUT admin/panne/update/{id}.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `update$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update(params: Update$Params, context?: HttpContext): Observable<PanneDto> {
    return this.update$Response(params, context).pipe(
      map((r: StrictHttpResponse<PanneDto>): PanneDto => r.body)
    );
  }

  /** Path part for operation `getById()` */
  static readonly GetByIdPath = '/admin/panne/{id}';

  /**
   * GET admin/panne/{id}.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getById$Response(params: GetById$Params, context?: HttpContext): Observable<StrictHttpResponse<PanneDto>> {
    return getById(this.http, this.rootUrl, params, context);
  }

  /**
   * GET admin/panne/{id}.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getById(params: GetById$Params, context?: HttpContext): Observable<PanneDto> {
    return this.getById$Response(params, context).pipe(
      map((r: StrictHttpResponse<PanneDto>): PanneDto => r.body)
    );
  }

  /** Path part for operation `getAll()` */
  static readonly GetAllPath = '/adminuser/panne';

  /**
   * GET adminuser/panne.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll$Response(params?: GetAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PanneDto>>> {
    return getAll(this.http, this.rootUrl, params, context);
  }

  /**
   * GET adminuser/panne.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll(params?: GetAll$Params, context?: HttpContext): Observable<Array<PanneDto>> {
    return this.getAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PanneDto>>): Array<PanneDto> => r.body)
    );
  }

  /** Path part for operation `create_1()` */
  static readonly Create_1Path = '/admin/Equipement/create';

  /**
   * POST admin/Equipement/create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create_1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create_1$Response(params: Create_1$Params, context?: HttpContext): Observable<StrictHttpResponse<EquipementDto>> {
    return create_1(this.http, this.rootUrl, params, context);
  }

  /**
   * POST admin/Equipement/create.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `create_1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create_1(params: Create_1$Params, context?: HttpContext): Observable<EquipementDto> {
    return this.create_1$Response(params, context).pipe(
      map((r: StrictHttpResponse<EquipementDto>): EquipementDto => r.body)
    );
  }

  /** Path part for operation `delete_1()` */
  static readonly Delete_1Path = '/admin/Equipement/delete/{id}';

  /**
   * DELETE admin/Equipement/delete/{id}.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete_1()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete_1$Response(params: Delete_1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete_1(this.http, this.rootUrl, params, context);
  }

  /**
   * DELETE admin/Equipement/delete/{id}.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete_1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete_1(params: Delete_1$Params, context?: HttpContext): Observable<void> {
    return this.delete_1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `update_1()` */
  static readonly Update_1Path = '/admin/Equipement/update/{id}';

  /**
   * PUT admin/Equipement/update/{id}.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update_1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update_1$Response(params: Update_1$Params, context?: HttpContext): Observable<StrictHttpResponse<EquipementDto>> {
    return update_1(this.http, this.rootUrl, params, context);
  }

  /**
   * PUT admin/Equipement/update/{id}.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `update_1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update_1(params: Update_1$Params, context?: HttpContext): Observable<EquipementDto> {
    return this.update_1$Response(params, context).pipe(
      map((r: StrictHttpResponse<EquipementDto>): EquipementDto => r.body)
    );
  }

  /** Path part for operation `getById_1()` */
  static readonly GetById_1Path = '/admin/Equipement/{id}';

  /**
   * GET admin/Equipement/{id}.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getById_1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getById_1$Response(params: GetById_1$Params, context?: HttpContext): Observable<StrictHttpResponse<EquipementDto>> {
    return getById_1(this.http, this.rootUrl, params, context);
  }

  /**
   * GET admin/Equipement/{id}.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getById_1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getById_1(params: GetById_1$Params, context?: HttpContext): Observable<EquipementDto> {
    return this.getById_1$Response(params, context).pipe(
      map((r: StrictHttpResponse<EquipementDto>): EquipementDto => r.body)
    );
  }

  /** Path part for operation `getAll_1()` */
  static readonly GetAll_1Path = '/adminuser/Equipement';

  /**
   * GET adminuser/Equipement.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAll_1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll_1$Response(params?: GetAll_1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<EquipementDto>>> {
    return getAll_1(this.http, this.rootUrl, params, context);
  }

  /**
   * GET adminuser/Equipement.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAll_1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll_1(params?: GetAll_1$Params, context?: HttpContext): Observable<Array<EquipementDto>> {
    return this.getAll_1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<EquipementDto>>): Array<EquipementDto> => r.body)
    );
  }

  /** Path part for operation `getAll_2()` */
  static readonly GetAll_2Path = '/admin/Ticket';

  /**
   * GET admin/Ticket.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAll_2()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll_2$Response(params?: GetAll_2$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TicketSupportDto>>> {
    return getAll_2(this.http, this.rootUrl, params, context);
  }

  /**
   * GET admin/Ticket.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAll_2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll_2(params?: GetAll_2$Params, context?: HttpContext): Observable<Array<TicketSupportDto>> {
    return this.getAll_2$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TicketSupportDto>>): Array<TicketSupportDto> => r.body)
    );
  }

  /** Path part for operation `delete_2()` */
  static readonly Delete_2Path = '/admin/Ticket/delete/{id}';

  /**
   * DELETE admin/Ticket/delete/{id}.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete_2()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete_2$Response(params: Delete_2$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete_2(this.http, this.rootUrl, params, context);
  }

  /**
   * DELETE admin/Ticket/delete/{id}.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete_2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete_2(params: Delete_2$Params, context?: HttpContext): Observable<void> {
    return this.delete_2$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `update_2()` */
  static readonly Update_2Path = '/admin/Ticket/update/{id}';

  /**
   * PUT admin/Ticket/update/{id}.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update_2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update_2$Response(params: Update_2$Params, context?: HttpContext): Observable<StrictHttpResponse<TicketSupportDto>> {
    return update_2(this.http, this.rootUrl, params, context);
  }

  /**
   * PUT admin/Ticket/update/{id}.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `update_2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update_2(params: Update_2$Params, context?: HttpContext): Observable<TicketSupportDto> {
    return this.update_2$Response(params, context).pipe(
      map((r: StrictHttpResponse<TicketSupportDto>): TicketSupportDto => r.body)
    );
  }

  /** Path part for operation `getById_2()` */
  static readonly GetById_2Path = '/admin/Ticket/{id}';

  /**
   * GET admin/Ticket/{id}.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getById_2()` instead.
   *
   * This method doesn't expect any request body.
   */
  getById_2$Response(params: GetById_2$Params, context?: HttpContext): Observable<StrictHttpResponse<TicketSupportDto>> {
    return getById_2(this.http, this.rootUrl, params, context);
  }

  /**
   * GET admin/Ticket/{id}.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getById_2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getById_2(params: GetById_2$Params, context?: HttpContext): Observable<TicketSupportDto> {
    return this.getById_2$Response(params, context).pipe(
      map((r: StrictHttpResponse<TicketSupportDto>): TicketSupportDto => r.body)
    );
  }

  /** Path part for operation `updateEtat()` */
  static readonly UpdateEtatPath = '/admintech/Ticket/updateetat/{id}';

  /**
   * PUT admintech/Ticket/updateetat/{id}.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateEtat()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEtat$Response(params: UpdateEtat$Params, context?: HttpContext): Observable<StrictHttpResponse<TicketSupportDto>> {
    return updateEtat(this.http, this.rootUrl, params, context);
  }

  /**
   * PUT admintech/Ticket/updateetat/{id}.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateEtat$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEtat(params: UpdateEtat$Params, context?: HttpContext): Observable<TicketSupportDto> {
    return this.updateEtat$Response(params, context).pipe(
      map((r: StrictHttpResponse<TicketSupportDto>): TicketSupportDto => r.body)
    );
  }

  /** Path part for operation `create_2()` */
  static readonly Create_2Path = '/user/Ticket/create';

  /**
   * POST user/Ticket/create.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create_2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create_2$Response(params: Create_2$Params, context?: HttpContext): Observable<StrictHttpResponse<TicketSupportDto>> {
    return create_2(this.http, this.rootUrl, params, context);
  }

  /**
   * POST user/Ticket/create.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `create_2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create_2(params: Create_2$Params, context?: HttpContext): Observable<TicketSupportDto> {
    return this.create_2$Response(params, context).pipe(
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
