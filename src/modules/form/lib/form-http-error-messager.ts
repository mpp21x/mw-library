import {FormGroup} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';

export interface FormHttpErrorMessager {

  getMessage(control: string): string[];

  clean(): void;

  setMessagesFromHttp(form: FormGroup, res: HttpErrorResponse): void;
}
