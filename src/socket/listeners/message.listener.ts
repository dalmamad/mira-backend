import { On, Listener } from 'sockerate';

@Listener('/message')
export default class MessageListener {
  @On('/new')
  public newMessage(socket: any, data: any, res: any) {
    console.log(data);
    res({ status: true });
  }
}
