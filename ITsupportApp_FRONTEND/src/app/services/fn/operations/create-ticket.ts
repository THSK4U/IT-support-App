/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TicketSupportDto } from '../../models/ticket-support-dto';

export interface CreateTicket$Params {
      body: TicketSupportDto
}

export function createTicket(http: HttpClient, rootUrl: string, params: CreateTicket$Params, context?: HttpContext): Observable<StrictHttpResponse<TicketSupportDto>> {
  const rb = new RequestBuilder(rootUrl, createTicket.PATH, 'post');
  if (params) {
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

createTicket.PATH = '/user/Ticket/create';
