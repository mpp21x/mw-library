import {FormGroup, ValidationErrors} from '@angular/forms';

export function ValidatorPasswordMustSame(controlName: string, matchingControlName: string, ) {
    return (formGroup: FormGroup): ValidationErrors | null => {
        const passwordControl = formGroup.controls[controlName];
        const passwordConfControl = formGroup.controls[matchingControlName];

        if (passwordConfControl.errors && !passwordConfControl.errors.mustSame) {
            return null;
        }

        if (passwordControl.value !== passwordConfControl.value) {
            passwordConfControl.setErrors({mustSame: true});
        } else {
            passwordConfControl.setErrors(null);
        }
        return null;
    };
}
