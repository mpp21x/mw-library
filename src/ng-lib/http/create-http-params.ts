import {HttpParams} from '@angular/common/http';

export function createHttpParams(params: {
  [param: string]: string | ReadonlyArray<string>
}) {
  return new HttpParams({fromObject: params});
}
