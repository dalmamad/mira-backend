import { Server, Socket } from 'socket.io';
import http from 'http';
import { setListeners } from 'sockerate';
import socketAuth from './middlewares/auth.middleware.socket';
import listeners from './listeners/index.listener';
import errorHandler from './error-handler';

export default class SocketApp {
  public static io: Server;

  public static init(server: http.Server) {
    this.io = new Server(server);

    this.initMiddlewares();
    this.initListeners();
  }

  private static initMiddlewares() {
    this.io.use(socketAuth);
  }

  private static initListeners() {
    SocketApp.io.on('connection', (socket: Socket) => {
      console.log('new conn');
      setListeners(socket, { listeners, errorHandler });
    });
  }
}
