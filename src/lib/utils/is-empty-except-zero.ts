export function isEmptyExceptZero(value): boolean {
  if (value === 0) {
    return true;
  }
  return !value;
}
