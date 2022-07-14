import {Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {debounceTime, finalize, switchMap, tap} from 'rxjs/operators';
import {UnsubscribeMap} from '../../../lib/rxjs/unsubscribe-map';
import {BlockLoadingService} from '../../loading/service/block-loading.service';
import {LoadingController} from '../../loading/lib/loading-controller';


@Injectable({
  providedIn: 'root',
})
export class LoadingService {

  protected readonly _spinSubject = new Subject();
  protected _customLoading: LoadingController;
  /** debounce 關閉 spin 秒數，預設 0.5 秒 */
  protected _hideSpinDebounceSeconds = 0.5;
  protected _hideSubscription = new UnsubscribeMap();

  constructor(protected readonly loadingService: BlockLoadingService) {
    this.subscribeHideSubject();
  }

  setSpinnerPipe<T>(observable: Observable<T>) {
    return this.setPipe(observable, false);
  }

  setCustomSpinnerPipe<T>(observable: Observable<T>) {
    return this.setPipe(observable, true);
  }

  setCustomSpinner(loading: LoadingController = null) {
    this._customLoading = loading;
  }

  protected setPipe<T>(observable: Observable<T>, isCustomLoading: boolean) {
    const loading = this.getSpinner(isCustomLoading);

    return of(null).pipe(
      tap(() => loading.start()),
      switchMap(() => observable),
      finalize(() => {
        setTimeout(() => loading.end(), 500);
        this._spinSubject.next();
      }),
    );
  }

  protected getSpinner(isCustom: boolean) {
    return isCustom ? this._customLoading : this.loadingService.loading;
  }

  protected subscribeHideSubject() {
    this._hideSubscription.set('hide', this._spinSubject
      .pipe(debounceTime(this._hideSpinDebounceSeconds * 1000))
      .subscribe());
  }
}
