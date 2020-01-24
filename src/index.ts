import express from 'express'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

import path from 'path';

import config from './config';
import router from './router';

mongoose.connect(config.mongodb_url, config.mongodb_connect_config);

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/static', express.static(path.join(__dirname, 'static')));

app.use('/', router);

app.listen(port, () => {
  // tslint:disable-next-line: no-console
  console.log( `server started at http://localhost:${ port }` );
});