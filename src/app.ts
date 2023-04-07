import express, { Express } from 'express';
import { setControllers } from 'decoress';
import http from 'http';
import cors from 'cors';
import GlobalErrorHandler from './middlewares/error-handler.middleware';
import controllers from './controllers/index.controller';
import env from './env';

export default class App {
  public static app = express();
  public static server = http.createServer(this.app);

  public static init() {
    this.initMiddlewares();
    this.initControllers();
    this.errorHandling();
    this.listen();
  }

  private static initControllers() {
    setControllers(this.app, {
      controllers,
      pathPrefix: env.pathPrefix,
    });
  }

  private static initMiddlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private static errorHandling() {
    this.app.use(GlobalErrorHandler.middleware);
  }

  private static listen() {
    this.server.listen(process.env.PORT, () => {
      console.log('server is listening on PORT:', process.env.PORT);
    });
  }
}
