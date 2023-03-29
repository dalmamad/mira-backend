import express, { Express } from 'express';
import { setControllers } from 'decoress';
import controllers from './controllers/index.controller';

class App {
  public app: Express;
  constructor() {
    this.app = express();
    this.initMiddlewares();
    this.initControllers();
    this.listen();
  }

  private initControllers() {
    setControllers(this.app, {
      controllers,
      pathPrefix: '/api',
    });
  }

  private initMiddlewares() {
    this.app.use(express.json());
  }

  private listen() {
    this.app.listen(process.env.PORT, () => {
      console.log('server is listening on PORT:', process.env.PORT);
    });
  }
}

export default App;
