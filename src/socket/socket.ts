import { Server } from 'socket.io';
import http from 'http';
import socketAuth from './middlewares/auth.middleware.socket';
import listeners from './listeners/index.listener';

export default class Socket {
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
    Socket.io.on('connection', (socket: any) => {
      listeners(socket);
    });
  }
}
