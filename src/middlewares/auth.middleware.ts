import { Mw } from 'decoress';
import { Request, Response, NextFunction } from 'express';
import TokenServices from '../services/token.service';
// TODO: clear 'as ...' in decode.sub by requiring sub
// TODO: handling unvalidate token error in erroHandler

export default function Auth(): Function {
  function validate(req: Request, _res: Response, next: NextFunction) {
    const token = TokenServices.extractToken(req.headers.authorization);
    const decode = TokenServices.TokenValidatoin(token);
    req.user = {
      id: parseInt(decode.sub as string, 10),
    };
    next();
  }
  return Mw(validate);
}
