import { Request, Response } from 'express';
import { Controller, Get, Post } from 'decoress';
import ContactServices from '../../services/contact.service';
import Auth from '../middlewares/auth.middleware';

@Controller('/contact')
export default class AuthController {
  @Get('/all')
  @Auth()
  async getContacts(req: Request, res: Response): Promise<void> {
    const constacts = await ContactServices.findUserContacts(req.user.id);
    res.status(200).json({ constacts });
  }

  @Post('/add')
  @Auth()
  async addContact(req: Request, res: Response): Promise<void> {
    const constacts = await ContactServices.findUserContacts(req.user.id);
    res.status(200).json({ constacts });
  }
}
