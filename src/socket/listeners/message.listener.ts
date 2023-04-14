import { On, Listener } from 'sockerate';
import { Socket } from 'socket.io';
import validate from '../middlewares/validate.middleware.socket';
import { newMessageValidate } from '../validations/message.validate.socket';
import { NewMessageDTO } from '../../dtos/message.dto';
import MessageServices from '../../services/message.service';
import ContactServices from '../../services/contact.service';

@Listener('/message')
export default class MessageListener {
  @On('/pv')
  public async getAllMessages(
    socket: Socket,
    message: Omit<NewMessageDTO, 'sender'>,
    res: Function
  ) {
    validate(newMessageValidate, message);

    const senderId = socket.user.id;
    // await ContactServices.isContact(senderId, message.recipientId);
    const newMessage = await MessageServices.saveMessage({
      ...message,
      senderId,
    });
    const received = MessageServices.sendMessage(socket, {
      ...message,
      senderId,
    });
    console.log('received: ', received);
    if (received) await MessageServices.addToReceived(newMessage.id);

    res({ status: true, received });
  }
}
