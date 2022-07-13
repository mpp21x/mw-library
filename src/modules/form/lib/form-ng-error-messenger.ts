export interface FormNgErrorMessenger {
  getMessagesFromControlErrors(errors: { [key: string]: any }): string[];
}
