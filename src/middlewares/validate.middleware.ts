import { Mw } from 'decoress';
import { Request, Response, NextFunction } from 'express';
import { ValidateSchema } from '../types/index.d';
import BadRequestError from '../errors/bad-request.error';

export default function Validate(validator: ValidateSchema): Function {
  function validate(req: Request, _res: Response, next: NextFunction) {
    (Object.keys(validator) as Array<keyof ValidateSchema>).forEach((key) => {
      if (!validator[key](req[key])) {
        throw new BadRequestError(validator[key].errors[0].message);
      }
    });

    next();
  }
  return Mw(validate);
}
