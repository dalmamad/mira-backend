import { Request, Response } from 'express';

export default class AuthController {
  static sayhello(req: Request, res: Response) {
    res.json({ say: 'hello' });
  }
}
