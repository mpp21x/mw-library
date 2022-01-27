import moment from 'moment';


export function checkStringIsDate(foramt: string, value: string): boolean {
  return moment(value, foramt, true).isValid();
}
