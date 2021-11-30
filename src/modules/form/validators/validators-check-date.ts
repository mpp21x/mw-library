import {FormControl, FormGroup, ValidationErrors} from '@angular/forms';
import {checkStringIsDate} from '../../../lib/check/check-string-is-date';

export function ValidatorsCheckDate(format: string) {
  return (control: FormGroup & FormControl): ValidationErrors | null => {
    if (!control.value) {
      return;
    }
    if (!checkStringIsDate(format, control.value)) {
      return {date_format: true};
    }
    return;

  };
}

