import { On, Listener } from 'sockerate';
import { Socket } from 'socket.io';

@Listener('/message')
export default class MessageListener {
  @On('/new')
  public newMessage(socket: Socket, data: any, res: Function) {
    console.log(data);
    res({ status: true });
  }
}
