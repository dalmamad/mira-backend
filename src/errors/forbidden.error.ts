import AppError from './app.error';

export default class ForbiddenError extends AppError {
  constructor(message: string) {
    super(message, 403);
  }
}
