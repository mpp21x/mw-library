import {FormNgErrorMessager} from '../form-ng-error-messager';

export class NgErrorMessager implements FormNgErrorMessager {
  getMessagesFromControlErrors(errors: { [key: string]: any }): string[] {
    const errorMessages = [];
    if (typeof errors !== 'object') {
      return errorMessages;
    }

    if (errors.hasOwnProperty('max')) {
      const maxObject: { max: number, actual: string } = errors.max;
      errorMessages.push(`數字不可大於 ${maxObject.max}`);
    }
    if (errors.hasOwnProperty('email')) {
      errorMessages.push('請使用正確的 email 格式');
    }
    if (errors.hasOwnProperty('required')) {
      errorMessages.push(`此欄位不可為空值`);
    }
    if (errors.hasOwnProperty('minlength')) {
      const min = errors.minlength;
      errorMessages.push(`字元不足 ${min.requiredLength}`);
    }
    if (errors.hasOwnProperty('mustSame')) {
      errorMessages.push('密碼不一致');
    }
    if (errors.hasOwnProperty('ipv4_format')) {
      errorMessages.push('ipv4 格式錯誤');
    }
    if (errors.hasOwnProperty('url_format')) {
      errorMessages.push('Url 格式錯誤');
    }

    if (errors.hasOwnProperty('email_exists')) {
      errorMessages.push('此信箱已使用過，請修改');
    }

    if (errors.hasOwnProperty('invalid')) {
      errorMessages.push('格式錯誤');
    }

    return errorMessages;
  }

}
