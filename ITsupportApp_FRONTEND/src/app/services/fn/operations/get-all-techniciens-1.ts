/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UtilisateurDto } from '../../models/utilisateur-dto';

export interface GetAllTechniciens_1$Params {
}

export function getAllTechniciens_1(http: HttpClient, rootUrl: string, params?: GetAllTechniciens_1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UtilisateurDto>>> {
  const rb = new RequestBuilder(rootUrl, getAllTechniciens_1.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<UtilisateurDto>>;
    })
  );
}

getAllTechniciens_1.PATH = '/admin/utilisateur';
