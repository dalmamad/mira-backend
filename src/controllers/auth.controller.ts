import { Request, Response } from 'express';
import { Controller, Post } from 'decoress';
import Validate from '../middlewares/validate.middleware';
import UserServices from '../services/user.service';
import { RegisterDTO } from '../dtos/auth.dto';
import { registerValidate } from '../validations/auth.validate';

@Controller('/auth')
export default class AuthController {
  @Post('/register')
  @Validate(registerValidate)
  async register(req: Request, res: Response): Promise<void> {
    const { confirmPassword, ...user } = req.body as RegisterDTO;
    const newUser = await UserServices.createUser(user);
    res.json({ newUser });
  }
}
