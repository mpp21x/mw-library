import {UntypedFormControl, UntypedFormGroup, ValidationErrors} from '@angular/forms';
import {checkIsIpv4} from '../../../lib/check/check-is-ipv4';

export function ValidatorIpv4(control: UntypedFormGroup & UntypedFormControl): ValidationErrors | null {
  if (!control.value) {
    return;
  }

  if (!checkIsIpv4(control.value)) {
    return {ipv4_format: true};
  }
  return;
}
