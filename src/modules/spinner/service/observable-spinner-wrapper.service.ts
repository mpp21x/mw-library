import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {NgxSpinnerService} from 'ngx-spinner';
import {CustomSpinner} from '../lib/custom-spinner';

@Injectable({
  providedIn: 'root'
})
export class ObservableSpinnerWrapper {

  protected _customSpinner: CustomSpinner;

  constructor(protected readonly spinner: NgxSpinnerService) {
  }

  setObservableSpinner<T>(observable: Observable<T>) {
    return this.innerConfig(observable, false);
  }

  setObservableCustomSpinner<T>(observable: Observable<T>) {
    return this.innerConfig(observable, true);
  }

  setCustomSpinner(spinner: CustomSpinner = null) {
    this._customSpinner = spinner;
  }

  protected innerConfig<T>(observable: Observable<T>, isCustomSpinner: boolean) {
    const spinner = this.getSpinner(isCustomSpinner);
    spinner.show();
    const endFn = () => setTimeout(() => spinner.hide(), 500);
    return observable.pipe(tap({
      next: endFn,
      error: endFn
    }));
  }

  protected getSpinner(isCustom: boolean) {
    return isCustom ? this._customSpinner : this.spinner;
  }
}
