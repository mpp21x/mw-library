import {UntypedFormControl, UntypedFormGroup, ValidationErrors} from '@angular/forms';
import {checkStringIsDate} from '../../../lib/check/check-string-is-date';

export function ValidatorsCheckDate(format: string) {
  return (control: UntypedFormGroup & UntypedFormControl): ValidationErrors | null => {
    if (!control.value) {
      return;
    }
    if (!checkStringIsDate(format, control.value)) {
      return {date_format: true};
    }
    return;

  };
}

