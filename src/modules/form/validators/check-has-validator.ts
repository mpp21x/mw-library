import {UntypedFormControl, ValidatorFn} from '@angular/forms';
import * as R from 'ramda';

export function checkHasValidator(control: UntypedFormControl, validatorFn: ValidatorFn) {
  if (!control || !R.has('_rawValidators', control)) {
    return false;
  }
  const validators = (control as any)._rawValidators;
  if (!Array.isArray(validators)) {
    return false;
  } else if (validators.includes(validatorFn)) {
    return true;
  }

  return false;
}
