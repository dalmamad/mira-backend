import express, { Express } from 'express';
import { setControllers } from 'decoress';
import GlobalErrorHandler from './middlewares/error-handler.middleware';
import controllers from './controllers/index.controller';

class App {
  public static app: Express;
  public static init() {
    this.app = express();
    this.initMiddlewares();
    this.initControllers();
    this.errorHandling();
    this.listen();
  }

  private static initControllers() {
    setControllers(this.app, {
      controllers,
      pathPrefix: '/api',
    });
  }

  private static initMiddlewares() {
    this.app.use(express.json());
  }

  private static errorHandling() {
    this.app.use(GlobalErrorHandler.middleware);
  }

  private static listen() {
    this.app.listen(process.env.PORT, () => {
      console.log('server is listening on PORT:', process.env.PORT);
    });
  }
}

export default App;
