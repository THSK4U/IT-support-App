/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EquipementDto } from '../../models/equipement-dto';

export interface Create_1$Params {
      body: EquipementDto
}

export function create_1(http: HttpClient, rootUrl: string, params: Create_1$Params, context?: HttpContext): Observable<StrictHttpResponse<EquipementDto>> {
  const rb = new RequestBuilder(rootUrl, create_1.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EquipementDto>;
    })
  );
}

create_1.PATH = '/admin/Equipement/create';
