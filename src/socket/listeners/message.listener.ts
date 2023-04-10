import { On, Listener } from 'sockerate';
import { Socket } from 'socket.io';
import validate from '../middlewares/validate.middleware.socket';
import { newMessageValidate } from '../validations/message.validate.socket';
import { NewMessageDTO } from '../../dtos/message.dto';
import MessageServices from '../../services/message.service';
import UserServices from '../../services/user.service';

@Listener('/message')
export default class MessageListener {
  @On('/new')
  public async newMessage(
    socket: Socket,
    message: Omit<NewMessageDTO, 'sender'>,
    res: Function
  ) {
    const senderId = socket.user.id;
    validate(newMessageValidate, message);
    // await UserServices.isContact(senderId, message.receiverId);
    await MessageServices.saveMessage({ ...message, senderId });
    MessageServices.sendMessage(socket, { ...message, senderId });

    res({ status: true });
  }
}
