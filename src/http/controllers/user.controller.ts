import { Request, Response } from 'express';
import { Controller, Get } from 'decoress';
import { SearchUserDTO } from '../../dtos/user.dto';
import UserServices from '../../services/user.service';
import Auth from '../middlewares/auth.middleware';
import Validate from '../middlewares/validate.middleware';
import { searchUserValidate } from '../validations/user.validate';

@Controller('/user')
export default class AuthController {
  @Get()
  @Auth()
  async getUser(req: Request, res: Response): Promise<void> {
    const user = await UserServices.findUserById(req.user.id);
    res.status(200).json({ user });
  }

  @Get('/search')
  @Auth()
  @Validate(searchUserValidate)
  async searchUser(
    req: Request<object, object, object, SearchUserDTO>,
    res: Response
  ): Promise<void> {
    const user = await UserServices.findUserByUsername(req.query.username);
    res.status(200).json({ user });
  }
}
