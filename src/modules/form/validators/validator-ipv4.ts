import {FormControl, FormGroup, ValidationErrors} from '@angular/forms';
import {checkIsIpv4} from '../../../lib/check/check-is-ipv4';

export function ValidatorIpv4(control: FormGroup & FormControl): ValidationErrors | null {
  if (!control.value) {
    return;
  }

  if (!checkIsIpv4(control.value)) {
    return {ipv4_format: true};
  }
  return;
}
