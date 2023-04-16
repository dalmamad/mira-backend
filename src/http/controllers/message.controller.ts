import { Request, Response } from 'express';
import { Controller, Get } from 'decoress';
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
    const { recipientId, since, qty } = req.query;
    const qtyNum = parseInt(qty as string, 10);
    const messages = await MessageServices.findPvMessages({
      senderId: req.user.id,
      recipientId,
      since,
      qty: qtyNum,
    });
    res.status(200).json({ messages });
  }

  @Get('/new')
  @Auth()
  async getNewMessages(req: Request, res: Response) {
    const userId = req.user.id;
    const newMessages = await MessageServices.findNewMessages(userId);
    await MessageServices.addManyToReceived(userId);
    res.status(200).json({ newMessages });
  }
}
