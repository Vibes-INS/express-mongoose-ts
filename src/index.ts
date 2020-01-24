import express from 'express'
import bodyParser from 'body-parser';
import path from 'path';

import router from './router';

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/static', express.static(path.join(__dirname, 'static')));

app.use('/', router);

app.listen(port, () => {
  // tslint:disable-next-line: no-console
  console.log( `server started at http://localhost:${ port }` );
});