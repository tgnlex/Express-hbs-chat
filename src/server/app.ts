import { engine } from 'express-handlebars';
import Application from './modules/bootstrapper';
import AppError from './modules/error';
import config from './config/express.ts';
import router from './routes/index.ts';

/*** APPLICATION ***/
const application = new Application(config);

/*** ENGINE ***/
application.server.engine('handlebars', engine());

/*** BOOTSTRAP ***/
application.bootstrap(router);

/*** ROUTE NOT FOUND ***/
application.server.all('*', (req, res, next) => { next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))});

/*** NOW ITS ART ***/
export default application;

/*********************
 * @JS-DOC           *
 * sponser me        *
 * github.com/tgnlex *            
 * ****************************************
 * SWAGGER UI ? MORE LIKE : ID RATHER DIE *
 ******************************************
