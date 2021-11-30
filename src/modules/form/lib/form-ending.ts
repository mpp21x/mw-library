export interface FormEnding<T> {
  end(params: { [key: string]: unknown, result: boolean, message: string }): T;
}
