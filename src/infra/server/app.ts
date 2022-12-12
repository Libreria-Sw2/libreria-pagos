import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import logger from '../utils/logger';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import compression from 'compression';
import v1Router from '../http/api/v1';
import { ApiError, InternalError } from '../../business/core/ApiError';

const origin = {
  origin: '*',
};

const app = express();
process.on('uncaughtException', e => {
  logger.error(e);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(origin));
app.use(compression());
app.use(helmet());
app.use(morgan('combined'));
app.use('/api/v1', v1Router);

const port = process.env.PORT || 5000;

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  if (err instanceof ApiError) {
    ApiError.handle(err, res);
  } else {
    if (process.env.NODE_ENV === 'development') {
      logger.error(err);
      return res.status(500).send(err.message);
    }
    ApiError.handle(new InternalError(), res);
  }
});

app
  .listen(port, () => {
    console.log(`[App]: Listening on port ${port}`);
  })
  .on('error', e => logger.error(e));
