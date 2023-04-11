import { Socket } from 'socket.io';
import TokenServices from '../../services/token.service';
import SocketApp from '../socket';

export default function socketAuth(socket: Socket, next: any) {
  try {
    const { token } = socket.handshake.auth;
    TokenServices.TokenValidatoin(token);
    const { sub: userId } = TokenServices.TokenValidatoin(token);
    SocketApp.users[userId as string] = socket.id;
    socket.user = { id: userId as string };
    next();
  } catch (err: any) {
    next(err);
  }
}
