/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PanneDto } from '../../models/panne-dto';

export interface Updatepanne$Params {
  id: number;
      body: PanneDto
}

export function updatepanne(http: HttpClient, rootUrl: string, params: Updatepanne$Params, context?: HttpContext): Observable<StrictHttpResponse<PanneDto>> {
  const rb = new RequestBuilder(rootUrl, updatepanne.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
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

updatepanne.PATH = '/admin/panne/update/{id}';
