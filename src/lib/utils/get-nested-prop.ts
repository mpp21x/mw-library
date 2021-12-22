import * as R from 'ramda';


export function getNestedProp<T = null>(nestedProperty: string, target: unknown, defaultValue?: T) {
  const restOfPropertyNames = nestedProperty.split('.');
  const path = R.path(restOfPropertyNames, target);
  return path ? path : defaultValue;
}
