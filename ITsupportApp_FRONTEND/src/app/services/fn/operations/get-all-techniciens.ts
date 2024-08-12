/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TechnicienDto } from '../../models/technicien-dto';

export interface GetAllTechniciens$Params {
}

export function getAllTechniciens(http: HttpClient, rootUrl: string, params?: GetAllTechniciens$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TechnicienDto>>> {
  const rb = new RequestBuilder(rootUrl, getAllTechniciens.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<TechnicienDto>>;
    })
  );
}

getAllTechniciens.PATH = '/admin/techniciens';
