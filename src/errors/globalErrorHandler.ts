import { Request, Response, NextFunction } from 'express';
import { Prisma } from '@prisma/client';
import { JsonWebTokenError } from 'jsonwebtoken';
import AppError from './app.error';
import UnauthorizedError from './ٰunauthorized.error';
import BadRequestError from './badRequest.error';

class GlobalErrorHandler {
  public static http(
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
  ): void {
    err = GlobalErrorHandler.setError(err);

    if (err instanceof AppError)
      res.status(err.statusCode).json({
        msg: err.message,
      });
    else
      res.status(500).json({
        msg: 'Internal Server Error',
      });
  }

  public static socket(err: Error, res: Function) {
    err = GlobalErrorHandler.setError(err);
    if (err instanceof AppError)
      res({
        status: false,
        err: {
          statusCode: err.statusCode,
          msg: err.message,
        },
      });
    else
      res({
        status: false,
        err: {
          statusCode: 500,
          msg: 'Internal Server Error',
        },
      });
  }

  private static setError(err: Error): Error {
    if (err instanceof JsonWebTokenError)
      err = GlobalErrorHandler.jwtErrorHandler(err);
    if (err instanceof Prisma.PrismaClientKnownRequestError)
      err = GlobalErrorHandler.dbErrorHandler(err);
    if (err.name === 'SyntaxError')
      err = GlobalErrorHandler.jsonErrorHandler(err);
    return err;
  }

  private static dbErrorHandler(
    err: Prisma.PrismaClientKnownRequestError
  ): AppError | Prisma.PrismaClientKnownRequestError {
    if (err.code === 'P2002')
      return new BadRequestError(`${err.meta?.target} must be unique`);
    return err;
  }

  private static jsonErrorHandler(err: Error): AppError {
    return new BadRequestError(err.message);
  }

  private static jwtErrorHandler(err: JsonWebTokenError): AppError {
    return new UnauthorizedError(err.message);
  }
}

export default GlobalErrorHandler;
