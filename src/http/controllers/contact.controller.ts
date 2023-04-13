import { Request, Response } from 'express';
import { Controller, Get, Post } from 'decoress';
import { AddContactDTO } from '../../dtos/contact.dto';
import ContactServices from '../../services/contact.service';
import Auth from '../middlewares/auth.middleware';
import Validate from '../middlewares/validate.middleware';
import { registerValidate } from '../validations/contact.validate';

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
  @Validate(registerValidate)
  async addContact(
    req: Request<object, object, AddContactDTO, object>,
    res: Response
  ): Promise<void> {
    const newContact = await ContactServices.addContact(
      req.user.id,
      req.body.contactId
    );
    res.status(200).json({ newContact });
  }
}
