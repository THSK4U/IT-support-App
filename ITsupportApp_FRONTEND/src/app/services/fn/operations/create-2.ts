/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TicketSupportDto } from '../../models/ticket-support-dto';

export interface Create_2$Params {
      body: TicketSupportDto
}

export function create_2(http: HttpClient, rootUrl: string, params: Create_2$Params, context?: HttpContext): Observable<StrictHttpResponse<TicketSupportDto>> {
  const rb = new RequestBuilder(rootUrl, create_2.PATH, 'post');
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

create_2.PATH = '/user/Ticket/create';
