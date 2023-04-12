import { Mw } from 'decoress';
import { Request, Response, NextFunction } from 'express';
import { ValidateSchema } from '../../types/index.d';
import BadRequestError from '../../errors/badRequest.error';

export default function Validate(validator: ValidateSchema): Function {
  function validate(req: Request, _res: Response, next: NextFunction) {
    (Object.keys(validator) as Array<keyof ValidateSchema>).forEach((key) => {
      if (!validator[key](req[key])) {
        console.log(validator[key].errors);
        throw new BadRequestError(
          `${validator[key].errors[0].instancePath} ${validator[key].errors[0].message}`
        );
      }
    });

    next();
  }
  return Mw(validate);
}
