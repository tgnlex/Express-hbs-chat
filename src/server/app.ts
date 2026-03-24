import { engine } from 'express-handlebars';
import Application from './modules/bootstrapper';

import config from './config/express.ts';
import router from './routes/index.ts';
import express from 'express';

/*** APPLICATION ***/
const app = new Application(config);

app.server.disable('x-powered-by');
app.server.engine('handlebars', engine());
/*** BOOTSTRAP ***/
app.bootstrap();


app.server.use(router);



export default app;
