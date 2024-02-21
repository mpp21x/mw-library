import {UntypedFormControl, UntypedFormGroup, ValidationErrors} from '@angular/forms';
import {checkIsUrl} from '../../../lib/check/check-is-url';

export function ValidatorUrl(control: UntypedFormGroup & UntypedFormControl): ValidationErrors | null {
  if (!control.value) {
    return;
  }
  if (!checkIsUrl(control.value)) {
    return {url_format: true};
  }
  return;
}
