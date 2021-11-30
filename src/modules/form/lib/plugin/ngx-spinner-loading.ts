import {FormLoading} from '../form-loading';
import {NgxSpinnerService} from 'ngx-spinner';

export class NgxSpinnerLoading implements FormLoading {

  constructor(protected readonly spinner: NgxSpinnerService) {
  }

  start(): void {
    this.spinner.show();
  }

  end(): void {
    this.spinner.hide();
  }
}
