import AppError from '../errors/app.error';

export default function errorHandler(err: AppError, res: Function) {
  const { message, statusCode } = err;
  console.log(err);
  res({ err: message, statusCode });
}
