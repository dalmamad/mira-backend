import { Request, Response } from 'express';
import { Controller, Get, Post, Delete } from 'decoress';
import { AddContactDTO, DeleteContactDTO } from '../../dtos/contact.dto';
import ContactServices from '../../services/contact.service';
import Auth from '../middlewares/auth.middleware';
import Validate from '../middlewares/validate.middleware';
import {
  addContactValidate,
  deleteContactValidate,
} from '../validations/contact.validate';

@Controller('/contact')
export default class ContactController {
  @Get('/all')
  @Auth()
  async getContacts(req: Request, res: Response): Promise<void> {
    const constacts = await ContactServices.findUserContacts(req.user.id);
    res.status(200).json({ constacts });
  }

  @Post('/')
  @Auth()
  @Validate(addContactValidate)
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

  @Delete('/:id')
  @Auth()
  @Validate(deleteContactValidate)
  async deleteContact(
    req: Request<DeleteContactDTO, object, DeleteContactDTO, object>,
    res: Response
  ): Promise<void> {
    const deleted = await ContactServices.deleteUserContact(
      req.user.id,
      req.params.id
    );
    res.status(200).json({ deleted });
  }
}
