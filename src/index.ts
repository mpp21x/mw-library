/*
 * Public API Surface of mw2021-library
 */

/** check */
import {BootstrapFormModule} from './modules/bootstrap-form/bootstrap-form.module';
import {BootstrapTableModule} from './modules/bootstrap-table/bootstrap-table.module';
import {FormModule} from './modules/form/form.module';
import {BootstrapPaginationTableComponent} from './modules/bootstrap-table/components/bootstrap-pagination-table/bootstrap-pagination-table.component';
import {EventListenerModule} from './modules/event-listener/event-listener.module';
import {SpinnerModule} from './modules/spinner/spinner.module';


export {checkIsIpv4} from './lib/check/check-is-ipv4';
export {checkIsUrl} from './lib/check/check-is-url';
export {checkStringIsDate} from './lib/check/check-string-is-date';
/** date */
export {oneDayPeriod, fromStartToEndPeriod, startDay, endDay} from './lib/date/one-day-period';
/** download file */
export {exportCsvFile} from './lib/file-download/export-csv-file';
export {saveFileResponse} from './ng-lib/file-download/save-file-response';
/** show error */
export {showFormErrors} from './ng-lib/form/show-form-errors';
/** helper */
export {createHttpParams} from './ng-lib/http/create-http-params';
export {StatusCode} from './lib/http/status-code';
/** paginator */
export {Paginator} from './lib/paginator/paginator';
/** rxjs */
export {cleanSubscriptionToUnsub} from './lib/rxjs/helpers';
/** utils */
export {escapeHtml} from './lib/utils/escape-html';
export {fillZeroWhenLessThanTen} from './lib/utils/fill-zero-when-less-than-ten';
export {getLastOne} from './lib/utils/get-last-one';
export {isEmptyExceptZero} from './lib/utils/is-empty-except-zero';
export {isNilOrEmpty} from './lib/utils/is-nil-or-empty';
export {getNestedProp} from './lib/utils/get-nested-prop';
export {nestedPropIsExists} from './lib/utils/nested-prop-is-exists';
export {numberFormat} from './lib/utils/number-format';
export {prettyJsonString} from './lib/utils/pretty-json-string';
export {randomString} from './lib/utils/random-string';
export * from './lib/utils/string-or-number-type';
/**
 * modules
 */
/** Form */
export {BaseFormHelperFactory} from './modules/form/lib/base-form-helper-factory';
export {LaravelHttpErrorMessage} from './modules/form/lib/plugin/laravel-http-error-message';
export {NgErrorMessager} from './modules/form/lib/plugin/ng-error-messager';
export {NgxSpinnerLoading} from './modules/form/lib/plugin/ngx-spinner-loading';
export {SweetalertEnding} from './modules/form/lib/plugin/sweetalert-ending';
export {FormEnding} from './modules/form/lib/form-ending';
export {FormHelper} from './modules/form/lib/form-helper';
export {FormHttpErrorMessager} from './modules/form/lib/form-http-error-messager';
export {FormLoading} from './modules/form/lib/form-loading';
export {FormNgErrorMessager} from './modules/form/lib/form-ng-error-messager';
export {selectFirstOne} from './modules/form/lib/select-first-one';

export {RequiredLabelDirective} from './modules/form/directives/required-label.directive';

export {checkHasValidator} from './modules/form/validators/check-has-validator';
export {ValidatorIpv4} from './modules/form/validators/validator-ipv4';
export {ValidatorPasswordMustSame} from './modules/form/validators/validator-password-must-same';
export {ValidatorUrl} from './modules/form/validators/validator-url';
export {ValidatorsCheckDate} from './modules/form/validators/validators-check-date';

export {FormModule} from './modules/form/form.module';
export {FormSubmitter} from './modules/form/service/form-submitter.service';
/** Bootstrap Form */
export {SelectOption} from './modules/bootstrap-form/lib/bootstrap-select/select-option';
export {BootstrapInputComponent} from './modules/bootstrap-form/components/bootstrap-input/bootstrap-input.component';
export {
  BootstrapSelectComponent
} from './modules/bootstrap-form/components/bootstrap-select/bootstrap-select.component';
export {
  BootstrapTextareaComponent
} from './modules/bootstrap-form/components/bootstrap-textarea/bootstrap-textarea.component';
export {BaseComponent} from './modules/bootstrap-form/components/base.component';
export {
  BootstrapInputSelectComponent
} from './modules/bootstrap-form/components/bootstrap-input-select/bootstrap-input-select.component';
export {
  BootstrapDatetimePickerComponent
} from './modules/bootstrap-form/components/bootstrap-datetime-picker/bootstrap-datetime-picker.component';
export {BootstrapSwapSelectComponent} from './modules/bootstrap-form/components/bootstrap-swap-select/bootstrap-swap-select.component';

export {BootstrapFormModule} from './modules/bootstrap-form/bootstrap-form.module';
/** Bootstrap Table */
export {BootstrapTableComponent} from './modules/bootstrap-table/components/bootstrap-table/bootstrap-table.component';
export {
  BootstrapPaginationTableComponent
} from './modules/bootstrap-table/components/bootstrap-pagination-table/bootstrap-pagination-table.component';
export {BootstrapTableModule} from './modules/bootstrap-table/bootstrap-table.module';

/** Spinner */
export {ObservableSpinnerWrapper} from './modules/spinner/service/observable-spinner-wrapper.service';
export {CustomSpinner} from './modules/spinner/lib/custom-spinner';
export {SpinnerModule} from './modules/spinner/spinner.module';

/** Event Listener */
export {PopupWindow} from './modules/event-listener/lib/popup-window';
export {GlobalClickEventListener} from './modules/event-listener/lib/global-click-event-listener';
export {EventListenerModule} from './modules/event-listener/event-listener.module';

export * from './mw-module';
