import {Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {showFormErrors} from 'mw2021-library';
import {FormHelper} from '../lib/form-helper';

@Injectable({
  providedIn: 'root'
})
export class FormSubmitter {

  private _subject = new Subject();

  constructor() {
  }

  getObservable() {
    return this._subject.asObservable();
  }

  formSubmit<T>(formHelper: FormHelper, observable: Observable<T>) {
    showFormErrors(formHelper.form);
    if (formHelper.unableToSubmit()) {
      return of();
    }

    formHelper.beforeSubmit();
    return this.observableSubmit<T>(formHelper.afterSubmit(observable));
  }

  observableSubmit<T>(observable: Observable<T>) {
    return observable
      .pipe(tap(() => this._subject.next()));
  }
}
