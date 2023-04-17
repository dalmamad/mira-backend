import express, { Response, Request } from 'express';
import { join } from 'path';
import { readFile } from 'fs';
import { marked } from 'marked';
import { setControllers } from 'decoress';
import http from 'http';
import cors from 'cors';
import swaggerDoc from 'swagger-ui-express';
import swaggerDocument from '../docs/http/swaggerDocument';
import GlobalErrorHandler from '../errors/globalErrorHandler';
import controllers from './controllers/index.controller';
import env from '../env';

export default class App {
  public static app = express();
  public static server = http.createServer(this.app);

  public static init() {
    this.initMiddlewares();
    this.initControllers();
    this.errorHandling();
    this.initDocs();
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
    this.app.use(GlobalErrorHandler.http);
  }

  private static listen() {
    this.server.listen(process.env.PORT, () => {
      console.log('server is listening on PORT:', process.env.PORT);
    });
  }

  private static initDocs() {
    this.app.use(
      '/docs/http',
      swaggerDoc.serve,
      swaggerDoc.setup(swaggerDocument)
    );

    this.app.get('/docs/ws', (_req: Request, res: Response) => {
      const path = join(__dirname, '../docs/ws/socketDocument.html');
      res.sendFile(path);
    });
  }
}
