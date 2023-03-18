import express, { Express } from 'express';
import { useExpressServer } from 'routing-controllers';
import controllers from './controllers/index.controller';

class App {
  public app: Express;
  constructor() {
    this.app = express();
    this.initControllers();
    this.listen();
  }

  private initControllers() {
    useExpressServer(this.app, {
      routePrefix: process.env.ROUTEPREFIX,
      controllers,
    });
  }

  private listen() {
    this.app.listen(process.env.PORT, () => {
      console.log('server is listening on PORT:', process.env.PORT);
    });
  }
}

export default App;
