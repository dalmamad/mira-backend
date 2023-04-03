import HttpError from './http.error';

export default class BadRequestError extends HttpError {
  constructor(message: string) {
    super(message, 400);
  }
}
