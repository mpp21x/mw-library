import {FormHttpErrorMessenger} from '../form-http-error-messenger';
import {UntypedFormGroup} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';

export class LaravelHttpErrorMessenger implements FormHttpErrorMessenger {
  protected map: { [key: string]: string[] } = {};

  clean(): void {
    this.map = {};
  }

  getMessage(controlName: string): string[] {
    if (this.map.hasOwnProperty(controlName)) {
      return this.map[controlName];
    }
    return [];
  }

  setMessagesFromHttp(form: UntypedFormGroup, res: HttpErrorResponse): void {
    const errors = res.error.errors as { [key: string]: string[] };
    for (const [fieldName, messages] of Object.entries(errors)) {
      this.map[fieldName] = messages.map((message) => {
        if (message.includes('has already been taken.')) {
          message = '此欄位無法重複輸入相同數值';
        }
        return message;
      });
      const abstractControl = form.get(fieldName);
      if (!abstractControl) {
        continue;
      }
      abstractControl.setErrors({invalid_from_api_response: true});
    }
  }

}
