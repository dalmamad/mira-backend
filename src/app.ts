import express, { Express } from 'express';
import routes from './routes/index.route';

class App {
  public app: Express;

  constructor() {
    this.app = express();
    this.routes();
    this.listen();
  }

  private routes() {
    this.app.use('/api', routes);
  }

  private listen() {
    this.app.listen(process.env.PORT, () => {
      console.log('server is listening on PORT:', process.env.PORT);
    });
  }
}

export default App;
