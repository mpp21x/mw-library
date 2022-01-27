import {HttpParams} from '@angular/common/http';

export function createHttpParams(params: {
  [param: string]: string | ReadonlyArray<string> | number
}) {
  return new HttpParams({
    fromObject: params as {
      [param: string]: string | ReadonlyArray<string>
    }
  });
}
