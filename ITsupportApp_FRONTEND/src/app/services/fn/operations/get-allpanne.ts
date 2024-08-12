/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PanneDto } from '../../models/panne-dto';

export interface GetAllpanne$Params {
}

export function getAllpanne(http: HttpClient, rootUrl: string, params?: GetAllpanne$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PanneDto>>> {
  const rb = new RequestBuilder(rootUrl, getAllpanne.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<PanneDto>>;
    })
  );
}

getAllpanne.PATH = '/adminuser/panne';
