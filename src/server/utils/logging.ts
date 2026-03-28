import Application from '../server/modules/bootstrapper.ts';
import { NEWLINE, SEPERATOR, SPACE } from '../../constants.js';
import { fmt } from './string.ts';
type Data = any | any[];

/*** HELPER UTILS ***/
const info = (tag, data: Data, context: object = {}) { console.info(tag + SPACE + data + NEWLINE  + context) }
const error = (tag, data: Data, context: object = {}) { console.info(tag + SPACE + data + NEWLINE  + context) }
const seperator = () => console.info(SEPERATOR);
const newline = () => console.info(NEWLINE);
const motd = (message: Data) => { console.info(TAG.MOTD + SPACE + message) };
/*** LOG FUNCTIONS ***/

const logServer = (data: Data, context: object = {}) => { info(TAG.SERVER, data, context) };
const logNotice = (data: Data, context: object = {}) => { info(TAG.NOTICE, data, context) };
const logError = (data: Data, context: object = {}) => { error(TAG.ERROR, data, context) };
const logCache = (data: Data, context: object = {}) => { info(TAG.CACHE, data, context) };
const logWarn = (data: Data, context: object = {}) => { error(TAG.WARN), data, context) };
const logAuth = (data: Data, context: object = {}) => { info(TAG.AUTH), data, context) };
const logHttp = (data: Data, context: object = {}) => { info(TAG.HTTP), data, context) };
const logMain =  (data: Data, context: object = {}) => { info(TAG.MAIN, data, context) };
const logInfo = (data: Data, context: object = {})=> { info(TAG.INFO, data, context) };
const logLib = (data: Data, context: object = {}) => { info(TAG.LIB, data, context) };
const logApp =  (data: Data, context: object = {}) => { info(TAG.TASK, data, context) };
const logDb = (data: Data, context: object = {}) => { info(TAG.DB, data, context) };
const logMw = (data: Data, context: object = {}) => { info(TAG.MW, data, context) };
const logWs = (data: Data, context: object = {}) => { info(TAG.WS, data, context) };

/*** PRESET LOG FUNCTIONS ***/
function information(app: Application, message: string) {
  /*** INFO ***/
  seperator();
  logInfo(`Active Environment: ${app.node()}`);
  logInfo(`App Name: ${app.name()}`);
  logInfo(`App Version: ${app.version()}`);
  logInfo(`App Protocol: ${app.protocol()}`);
  logInfo(`App Host: ${app.host()}`);
  logInfo(`App Port: ${app.port()}`);
  seperator();
  newline();
  motd(message);
  newline();
};


const startup: Startup = (app: Application): void => logMain(`listening on ${fmt.address(application)}`;);



const log = {
  utils: { info, error, seperator, newline, motd };
  preset: { information, startup }
  server: logServer,
  cache: logCache,
  error: logError,
  auth: logAuth,
  main: logMain,
  info: logInfo,
  http: logHttp,
  app: logApp,
  lib: logLib, 
  db: logDb,
  mw: logMw,
  ws: logWs,
};

export default log;

