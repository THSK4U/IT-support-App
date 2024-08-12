/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TicketSupportDto } from '../../models/ticket-support-dto';

export interface GetAll_2$Params {
}

export function getAll_2(http: HttpClient, rootUrl: string, params?: GetAll_2$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TicketSupportDto>>> {
  const rb = new RequestBuilder(rootUrl, getAll_2.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<TicketSupportDto>>;
    })
  );
}

getAll_2.PATH = '/admin/Ticket';
