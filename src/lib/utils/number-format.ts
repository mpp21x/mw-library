import * as R from 'ramda';

/**
 * input 15031
 * output 15,031
 */
export function numberFormat(num: number | string) {
  if (!R.is(String, num) && !R.is(Number, num)) {
    return 0;
  }
  num = +num;
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * input 15,031
 * output 15031
 */
export function numberTextToNumber(numberText: string): number {
  if (!R.is(String)) {
    return 0;
  }

  return +(numberText.split(',').join(''));
}
