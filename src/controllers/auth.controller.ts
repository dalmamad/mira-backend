import { Request, Response } from 'express';
import { Controller, Post } from 'decoress';
import UserServices from '../services/user.service';

@Controller('/auth')
export default class AuthController {
  @Post('/register')
  async register(req: Request, res: Response): Promise<void> {
    const { confirmPassword, ...user } = req.body;
    const newUser = await UserServices.createUser(user);
    res.json({ newUser });
  }
}
