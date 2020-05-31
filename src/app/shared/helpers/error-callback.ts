import { HttpErrorResponse } from '@angular/common/http';
import { Observable, EMPTY, of } from 'rxjs';

type errorCallbackFn = (error: HttpErrorResponse) =>  Observable<null>;
const errorCallback: errorCallbackFn = (error) => {
  if (error.status === 403) {
    return of(null);
  }
  return EMPTY;
};

export default errorCallback;
