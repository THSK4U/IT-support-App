/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TechnicienDto } from '../../models/technicien-dto';

export interface UpdateTechnicien$Params {
  id: number;
      body: TechnicienDto
}

export function updateTechnicien(http: HttpClient, rootUrl: string, params: UpdateTechnicien$Params, context?: HttpContext): Observable<StrictHttpResponse<TechnicienDto>> {
  const rb = new RequestBuilder(rootUrl, updateTechnicien.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
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

updateTechnicien.PATH = '/admin/techniciens/update/{id}';
