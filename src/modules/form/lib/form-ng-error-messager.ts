export interface FormNgErrorMessager {
  getMessagesFromControlErrors(errors: { [key: string]: any }): string[];
}
