/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TechnicienDto } from '../../models/technicien-dto';

export interface GetTechnicienById$Params {
  id: number;
}

export function getTechnicienById(http: HttpClient, rootUrl: string, params: GetTechnicienById$Params, context?: HttpContext): Observable<StrictHttpResponse<TechnicienDto>> {
  const rb = new RequestBuilder(rootUrl, getTechnicienById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TechnicienDto>;
    })
  );
}

getTechnicienById.PATH = '/admin/techniciens/{id}';
