/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TicketSupportDto } from '../../models/ticket-support-dto';

export interface GetByIdTicket$Params {
  id: number;
}

export function getByIdTicket(http: HttpClient, rootUrl: string, params: GetByIdTicket$Params, context?: HttpContext): Observable<StrictHttpResponse<TicketSupportDto>> {
  const rb = new RequestBuilder(rootUrl, getByIdTicket.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

getByIdTicket.PATH = '/admin/Ticket/{id}';
