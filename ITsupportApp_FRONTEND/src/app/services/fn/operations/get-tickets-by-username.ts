/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TicketSupportDto } from '../../models/ticket-support-dto';

export interface GetTicketsByUsername$Params {
  username: string;
}

export function getTicketsByUsername(http: HttpClient, rootUrl: string, params: GetTicketsByUsername$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TicketSupportDto>>> {
  const rb = new RequestBuilder(rootUrl, getTicketsByUsername.PATH, 'get');
  if (params) {
    rb.path('username', params.username, {});
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

getTicketsByUsername.PATH = '/user/{username}';
