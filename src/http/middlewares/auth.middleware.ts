import { Mw } from 'decoress';
import { Request, Response, NextFunction } from 'express';
import TokenServices from '../../services/token.service';

export default function Auth(): Function {
  function validate(req: Request, _res: Response, next: NextFunction) {
    const token = TokenServices.extractToken(req.headers.authorization);
    const decode = TokenServices.TokenValidatoin(token);
    req.user = {
      id: decode.sub as string,
    };
    next();
  }
  return Mw(validate);
}
