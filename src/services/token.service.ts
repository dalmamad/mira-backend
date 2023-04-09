//  TODO: check exp
//  TODO: how to make sub number?
//  TODO: can not read property of undefined on trim
import jwt, { JwtPayload } from 'jsonwebtoken';
import env from '../env';
import UnauthorizedError from '../errors/ٰunauthorized.error';

export default class TokenServices {
  public static createToken({ sub }: JwtPayload): string {
    const payload: JwtPayload = {
      sub,
      iat: new Date().getTime() / 1000,
      exp: (new Date().getTime() + env.jwt.expInMs) / 1000,
    };
    console.log(payload);
    return jwt.sign(payload, env.jwt.secret as string);
  }

  public static TokenValidatoin(token: string): JwtPayload | string {
    const decode = jwt.verify(token.trim(), env.jwt.secret as string);
    if (!decode) throw new UnauthorizedError('invalid token');
    return decode;
  }

  public static extractToken(authHeader: string | undefined): string {
    if (authHeader && authHeader.startsWith('Bearer '))
      return authHeader.split(' ')[1];
    throw new UnauthorizedError('invalid token');
  }
}
