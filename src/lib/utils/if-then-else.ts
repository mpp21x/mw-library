export function ifThenElse<T>(type: 'string' | 'number' | 'function' | 'object' | 'boolean', target: any, defaultValue: T): T {
  return typeof target === type ? target as T : defaultValue;
}

