import swal, {SweetAlertResult} from 'sweetalert2';
import {FormEnding} from '../form-ending';

export class SweetalertEnding implements FormEnding<Promise<SweetAlertResult<unknown>>> {
  end(params: { [p: string]: unknown, result: boolean, message: string, detailMsg: string }) {

    return swal.fire(params.message, params.detailMsg, params.result ? 'success' : 'error');
  }
}
