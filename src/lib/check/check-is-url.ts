export function checkIsUrl(url: string) {
  return /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/.test(url);
}
