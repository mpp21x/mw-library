import {FormGroup} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {FormHelper} from './form-helper';
import {FormLoading} from './form-loading';
import {NgxSpinnerLoading} from './plugin/ngx-spinner-loading';
import {FormHttpErrorMessager} from './form-http-error-messager';
import {LaravelHttpErrorMessage} from './plugin/laravel-http-error-message';
import {FormEnding} from './form-ending';
import {SweetalertEnding} from './plugin/sweetalert-ending';
import {FormNgErrorMessager} from './form-ng-error-messager';
import {NgErrorMessager} from './plugin/ng-error-messager';

export class BaseFormHelperFactory {

  protected loading: FormLoading;
  protected ending: FormEnding<unknown>;
  protected ngMessager: FormNgErrorMessager;
  protected errorMessager: FormHttpErrorMessager;

  constructor(protected readonly spinner: NgxSpinnerService) {
    this.loading = new NgxSpinnerLoading(spinner);
    this.ending = new SweetalertEnding();
    this.ngMessager = new NgErrorMessager();
    this.errorMessager = new LaravelHttpErrorMessage();
  }

  createFormHelper(form: FormGroup) {
    return new FormHelper(
      this.loading,
      this.ending,
      this.ngMessager,
      this.errorMessager,
      form,
    );
  }
}
