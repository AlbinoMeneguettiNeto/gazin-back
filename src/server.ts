import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

class Server {
  private app = express();

  private routes() {
    this.app.use('/api', routes);
  }

  private middlewares() {
    this.app.use(bodyParser.json());
  }

  build() {
    this.middlewares();
    this.routes();

    return this.app;
  }
}

export default new Server().build();
