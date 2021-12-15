export function nestedPropIsExists(nestedProperty: string, obj: { [key: string]: unknown }) {

  const restOfPropertyNames = nestedProperty.split('.');
  const length = restOfPropertyNames.length;
  for (let i = 0; i < length; i++) {
    if (!obj || !obj.hasOwnProperty(restOfPropertyNames[i])) {
      return false;
    }
    obj = obj[restOfPropertyNames[i]] as any;
  }
  return true;
}
