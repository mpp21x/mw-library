export function prettyJsonString(json: string): string {
  json = JSON.parse(json);
  return JSON.stringify(json, null, '\t');
}
