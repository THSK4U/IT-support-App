/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TicketSupportDto } from '../../models/ticket-support-dto';

export interface Update_2$Params {
  id: number;
      body: TicketSupportDto
}

export function update_2(http: HttpClient, rootUrl: string, params: Update_2$Params, context?: HttpContext): Observable<StrictHttpResponse<TicketSupportDto>> {
  const rb = new RequestBuilder(rootUrl, update_2.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TicketSupportDto>;
    })
  );
}

update_2.PATH = '/admin/Ticket/update/{id}';
