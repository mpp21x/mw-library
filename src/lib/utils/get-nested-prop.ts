/**
 * @deprecated 改用 ramda path
 */
export function getNestedProp<T>(nestedProperty: string, target: unknown, defaultValue: T = null) {
  const restOfPropertyNames = nestedProperty.split('.');
  const length = restOfPropertyNames.length;
  let i;
  for (i = 0; i < length; i++) {
    if (!target || !target.hasOwnProperty(restOfPropertyNames[i])) {
      return defaultValue;
    }
    target = target[restOfPropertyNames[i]];
  }
  return target as T;
}
