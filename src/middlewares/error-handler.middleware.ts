/* eslint-disable no-unused-vars */
// TODO: enhance error messages

import { Request, Response, NextFunction } from 'express';
import { Prisma } from '@prisma/client';
import { JsonWebTokenError } from 'jsonwebtoken';
import HttpError from '../errors/app.error';
import UnauthorizedError from '../errors/ٰunauthorized.error';
import BadRequestError from '../errors/bad-request.error';

class GlobalErrorHandler {
  public static middleware(
    err: unknown,
    _req: Request,
    res: Response,
    _next: NextFunction
  ): void {
    if (err instanceof JsonWebTokenError)
      err = GlobalErrorHandler.jwtErrorHandler(err);
    if (err instanceof Prisma.PrismaClientKnownRequestError)
      err = GlobalErrorHandler.dbErrorHandler(err);
    GlobalErrorHandler.sendErrorResponse(res, err);
  }

  private static dbErrorHandler(
    err: Prisma.PrismaClientKnownRequestError
  ): HttpError | Prisma.PrismaClientKnownRequestError {
    if (err.code === 'P2002')
      return new BadRequestError(`${err.meta?.target} must be unique`);
    return err;
  }

  private static jwtErrorHandler(
    err: JsonWebTokenError
  ): HttpError | Prisma.PrismaClientKnownRequestError {
    return new UnauthorizedError(err.message);
  }

  private static sendErrorResponse(res: Response, err: unknown) {
    if (err instanceof HttpError)
      res.status(err.statusCode).json({
        statusCode: err.statusCode,
        msg: err.message,
      });
    else
      res.status(500).json({
        statusCode: 500,
        msg: 'Internal Server Error',
      });
  }
}

export default GlobalErrorHandler;
