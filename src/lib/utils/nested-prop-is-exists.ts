export function getNestedProp<T>(nestedProperty: string, target: unknown) {

  const restOfPropertyNames = nestedProperty.split('.');
  const length = restOfPropertyNames.length;
  let i;
  for (i = 0; i < length; i++) {
    if (!target || !target.hasOwnProperty(restOfPropertyNames[i])) {
      return false;
    }
    target = target[restOfPropertyNames[i]];
  }
  return target as T;
}


export function nestedPropIsExists(nestedProperty: string, obj: { [key: string]: unknown } & any) {

  const restOfPropertyNames = nestedProperty.split('.');
  const length = restOfPropertyNames.length;
  for (let i = 0; i < length; i++) {
    if (!obj || !obj.hasOwnProperty(restOfPropertyNames[i])) {
      return false;
    }
    obj = obj[restOfPropertyNames[i]];
  }
  return true;
}
