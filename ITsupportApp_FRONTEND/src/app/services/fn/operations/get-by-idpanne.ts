/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PanneDto } from '../../models/panne-dto';

export interface GetByIdpanne$Params {
  id: number;
}

export function getByIdpanne(http: HttpClient, rootUrl: string, params: GetByIdpanne$Params, context?: HttpContext): Observable<StrictHttpResponse<PanneDto>> {
  const rb = new RequestBuilder(rootUrl, getByIdpanne.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PanneDto>;
    })
  );
}

getByIdpanne.PATH = '/admin/panne/{id}';
