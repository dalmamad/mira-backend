import { Request, Response } from 'express';
import { Controller, Post } from 'decoress';
import Validate from '../middlewares/validate.middleware';
import UserServices from '../services/user.service';
import AuthServices from '../services/auth.service';
import TokenServices from '../services/token.service';
import { RegisterDTO, LoginDTO } from '../dtos/auth.dto';
import { registerValidate, loginValidate } from '../validations/auth.validate';

@Controller('/auth')
export default class AuthController {
  @Post('/register')
  @Validate(registerValidate)
  async register(req: Request, res: Response): Promise<void> {
    const { confirmPassword, ...user } = req.body as RegisterDTO;
    const newUser = await UserServices.createUser(user);
    res.status(200).json({ newUser });
  }

  @Post('/login')
  @Validate(loginValidate)
  async login(req: Request, res: Response): Promise<void> {
    const { username, password } = req.body as LoginDTO;
    const user = await AuthServices.loginAthentication(username, password);
    const token = TokenServices.createToken({ sub: user.id });
    TokenServices.TokenValidatoin(token);
    res.status(200).json({ token, user });
  }
}
