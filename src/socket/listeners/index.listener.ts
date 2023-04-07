import MsgListener from './msg.listener';

export default function listeners(socket: any) {
  socket.on('new-msg', MsgListener.newMsg);
}
