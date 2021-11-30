export function isValidDateString(date: string): boolean {
  const date1 = new Date(date);
  return !isNaN(+date1);
}





