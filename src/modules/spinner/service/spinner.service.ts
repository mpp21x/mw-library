import {Injectable} from '@angular/core';
import {CustomSpinner} from '../lib/custom-spinner';
import {Observable, of, Subject} from 'rxjs';
import {debounceTime, finalize, switchMap, tap} from 'rxjs/operators';
import {NgxSpinnerService} from 'ngx-spinner';
import {UnsubscribeMap} from '../../../lib/rxjs/unsubscribe-map';


@Injectable({
  providedIn: 'root',
})
export class SpinnerService {

  protected readonly _spinSubject = new Subject();
  protected _customSpinner: CustomSpinner;
  /** debounce 關閉 spin 秒數，預設 0.5 秒 */
  protected _hideSpinDebounceSeconds = 0.5;
  protected _hideSubscription = new UnsubscribeMap();

  constructor(protected readonly defaultSpinner: NgxSpinnerService) {
    this.subscribeHideSubject();
  }

  setSpinnerPipe<T>(observable: Observable<T>) {
    return this.setPipe(observable, false);
  }

  setCustomSpinnerPipe<T>(observable: Observable<T>) {
    return this.setPipe(observable, true);
  }

  setCustomSpinner(spinner: CustomSpinner = null) {
    this._customSpinner = spinner;
  }

  protected setPipe<T>(observable: Observable<T>, isCustomSpinner: boolean) {
    const spinner = this.getSpinner(isCustomSpinner);

    return of(null).pipe(
      tap(() => spinner.show()),
      switchMap(() => observable),
      finalize(() => {
        setTimeout(() => spinner.hide(), 500);
        this._spinSubject.next();
      }),
    );
  }

  protected getSpinner(isCustom: boolean) {
    return isCustom ? this._customSpinner : this.defaultSpinner;
  }

  protected subscribeHideSubject() {
    this._hideSubscription.set('hide', this._spinSubject
      .pipe(debounceTime(this._hideSpinDebounceSeconds * 1000))
      .subscribe());
  }
}
