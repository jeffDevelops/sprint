import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as cors from 'cors';

import apiRouter from './api/index';

import originWhitelist from './config/originWhitelist';

const port = process.env.PORT || 3000;

const app = express();

app.use(logger('combined'));
app.use(bodyParser.json());

// Configure CORS
app.use(cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  origin: (origin: string, next: { (arg0: any, arg1: boolean): void; (arg0: Error): void; }) => {
    if (originWhitelist().includes(origin)) {
      next(null, true);
    } else {
      next(new Error('Origin not allowed'));
    }
  }
}));

app.use('/api', apiRouter);

app.listen(port, () => console.log(`Sprint API 🏃‍  on port ${port}`));