/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EquipementDto } from '../../models/equipement-dto';

export interface Updateequipement$Params {
  id: number;
      body?: EquipementDto
}

export function updateequipement(http: HttpClient, rootUrl: string, params: Updateequipement$Params, context?: HttpContext): Observable<StrictHttpResponse<EquipementDto>> {
  const rb = new RequestBuilder(rootUrl, updateequipement.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
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

updateequipement.PATH = '/admin/Equipement/update/{id}';
