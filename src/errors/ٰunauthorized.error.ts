import AppError from './app.error';

export default class UnauthorizedError extends AppError {
  constructor(message: string) {
    super(message, 401);
  }
}
