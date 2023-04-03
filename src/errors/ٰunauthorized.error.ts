import HttpError from './http.error';

export default class UnauthorizedError extends HttpError {
  constructor(message: string) {
    super(message, 401);
  }
}
