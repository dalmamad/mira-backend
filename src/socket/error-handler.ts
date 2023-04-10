import AppError from '../errors/app.error';

export default function errorHandler(err: AppError, res: Function) {
  console.log(err);
  res(err);
}
