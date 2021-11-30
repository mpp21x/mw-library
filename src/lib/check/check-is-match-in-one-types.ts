import * as R from 'ramda';

/**
 * 檢查變數是否為指定複數型別中的其中一個，若是則為 true
 */
export function checkIsMatchInOneTypes(value: any, types: any[]): boolean {
  return !types.every((type) => !R.is(type, value));
}

