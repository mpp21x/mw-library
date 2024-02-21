import {UntypedFormGroup} from '@angular/forms';
import {FormHelper} from './form-helper';
import {LoadingController} from '../../loading/lib/loading-controller';
import {FormHttpErrorMessenger} from './form-http-error-messenger';
import {LaravelHttpErrorMessenger} from './plugin/laravel-http-error-messenger';
import {FormEnding} from './form-ending';
import {SweetalertEnding} from './plugin/sweetalert-ending';
import {FormNgErrorMessenger} from './form-ng-error-messenger';
import {NgErrorMessenger} from './plugin/ng-error-messenger';
import {BlockLoadingService} from '../../loading/service/block-loading.service';

export class BaseFormHelperFactory {

  protected loading: LoadingController;
  protected ending: FormEnding<unknown>;
  protected ngMessenger: FormNgErrorMessenger;
  protected errorMessenger: FormHttpErrorMessenger;

  constructor(protected readonly loadingService: BlockLoadingService) {
    this.loading = loadingService.loading;
    this.ending = new SweetalertEnding();
    this.ngMessenger = new NgErrorMessenger();
    this.errorMessenger = new LaravelHttpErrorMessenger();
  }

  createFormHelper(form: UntypedFormGroup) {
    return new FormHelper(
      this.loading,
      this.ending,
      this.ngMessenger,
      this.errorMessenger,
      form,
    );
  }
}
