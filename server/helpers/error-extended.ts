export default class ExtendedError extends Error {
  public code: number;
  constructor(code: number, message: string) {
    super();
    this.code = code;
    this.message = message;
  }
}
