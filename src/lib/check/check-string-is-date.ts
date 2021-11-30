import * as moment_ from 'moment';

const moment = moment_;

export function checkStringIsDate(foramt: string, value: string): boolean {
  return moment(value, foramt, true).isValid();
}
