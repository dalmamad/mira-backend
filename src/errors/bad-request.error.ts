import AppError from './app.error';

export default class BadRequestError extends AppError {
  constructor(message: string) {
    super(message, 400);
  }
}
