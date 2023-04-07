import { Server } from 'socket.io';
import socketAuth from './middlewares/auth.middleware.socket';

export default class Socket {
  public static io: Server;

  public static init(server: any) {
    this.io = new Server(server);

    this.initMiddlewares();

    Socket.io.on('connection', (socket: any) => {
      console.log('a user connected');

      socket.on('message', (message: any, callback: any) => {
        console.log(message);
        callback(200);
      });
    });
  }

  private static initMiddlewares() {
    this.io.use(socketAuth);
  }
}
