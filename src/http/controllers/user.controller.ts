import { Request, Response } from 'express';
import { Controller, Get } from 'decoress';
import UserServices from '../../services/user.service';
import Auth from '../middlewares/auth.middleware';

@Controller('/user')
export default class AuthController {
  @Get()
  @Auth()
  async getUser(req: Request, res: Response): Promise<void> {
    const user = await UserServices.findUserById(req.user.id);
    res.status(200).json({ user });
  }
}
