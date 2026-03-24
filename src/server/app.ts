import { engine } from 'express-handlebars';
import Application from './modules/bootstrapper';
import information from './modules/information';
import config from './config/express.ts';
import router from './routes/index.ts';
import express from 'express';


const app = new Application(config);

app.prestrap('handlebars', engine());
app.bootstrap();


app.server.use(router);

export default app;
