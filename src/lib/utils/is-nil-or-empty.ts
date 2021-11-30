import * as R from 'ramda';


/**
 * isNilOrEmpty(0) false
 * isNilOrEmpty('') true
 * isNilOrEmpty(NaN) false
 *
 * isNilOrEmpty(null) true
 * isNilOrEmpty(undefined) true
 * isNilOrEmpty([]) true
 * isNilOrEmpty({}) true
 */
export function isNilOrEmpty(param) {
  return R.anyPass([R.isNil, R.isEmpty])(param);
}
