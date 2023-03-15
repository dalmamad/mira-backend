export default class AppError extends Error {
  statusCode: number;
  status: boolean;
  msg: string;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.status = false;
    this.msg = message;
  }
}
