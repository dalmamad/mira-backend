import { Server, Socket } from 'socket.io';
import http from 'http';
import { setListeners } from 'sockerate';
import socketAuth from './middlewares/auth.middleware.socket';
import listeners from './listeners/index.listener';
import GlobalErrorHandler from '../errors/globalErrorHandler';

export default class SocketApp {
  public static io: Server;
  public static users: { [ket: string]: string };

  public static init(server: http.Server) {
    this.io = new Server(server);
    this.users = {};

    this.initMiddlewares();
    this.initListeners();
  }

  private static initMiddlewares() {
    this.io.use(socketAuth);
  }

  private static initListeners() {
    SocketApp.io.on('connection', (socket: Socket) => {
      console.log('new connection');
      setListeners(socket, {
        listeners,
        errorHandler: GlobalErrorHandler.socket,
      });
    });
  }
}
