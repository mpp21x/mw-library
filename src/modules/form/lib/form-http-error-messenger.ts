import {UntypedFormGroup} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';

export interface FormHttpErrorMessenger {

  getMessage(control: string): string[];

  clean(): void;

  setMessagesFromHttp(form: UntypedFormGroup, res: HttpErrorResponse): void;
}
