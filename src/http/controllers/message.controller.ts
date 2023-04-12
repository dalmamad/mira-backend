import { Request, Response } from 'express';
import { Controller, Get, Post } from 'decoress';
import MessageServices from '../../services/message.service';
import { GetPvMessages } from '../../dtos/message.dto';
import Validate from '../middlewares/validate.middleware';
import Auth from '../middlewares/auth.middleware';
import { getPvMessagesValidate } from '../validations/message.validate';

@Controller('/msg')
export default class AuthController {
  @Get('/pv')
  @Auth()
  @Validate(getPvMessagesValidate)
  async getPvMessages(
    req: Request<object, object, object, GetPvMessages>,
    res: Response
  ): Promise<void> {
    const { receiverId, since, qty } = req.query;
    const qtyNum = parseInt(qty as string, 10);
    const messages = await MessageServices.findPvMessages({
      senderId: req.user.id,
      receiverId,
      since,
      qty: qtyNum,
    });
    res.status(200).json({ messages });
  }
}