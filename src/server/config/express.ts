import { APP } from './env.ts';
import express from 'express';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import {PATH} from '../../constants.ts';

type Globals = Array<{ key: string; value: string | number | boolean }>
type Plugins = Array<Function>

const plugins: Plugins = [
  express.static(PATH.STATIC),
  express.urlencoded({ extended: true }),
  express.json(), 
  express.text(), 
  express.raw(),
  cookieParser(),
  helmet()
];

const globals: Globals = [
  /*** APP GLOBALS ***/
  { key: 'app.logs', value: APP.LOG_LEVEL },
  { key: 'app.node', value: APP.NODE_ENV },
  { key: 'app.protocol', value: APP.PROTOCOL },
  { key: 'app.version', value: APP.VERSION },
  { key: 'app.name', value: APP.NAME},
  { key: 'app.host', value: APP.HOST},
  { key: 'app.port', value: APP.PORT},
  { key: 'app.engine', value: APP.ENGINE },
  { key: 'app.development', value: APP.DEVELOPMENT },
  { key: 'app.production', value: APP.PRODUCTION },
  { key: 'app.testing', value: APP.TESTING },
  /*** PATH GLOBALS ***/
  { key: 'path.upload', value: PATH.UPLOAD },
  { key: 'path.static', value: PATH.STATIC },
  { key: 'path.views', value: PATH.VIEWS },
  /*** EXPRESS GLOBALS ***/
  { key: 'view engine', value: 'handlebars'},
  { key: 'view path', value: PATH.VIEWS }
];

interface IConfig {
  globals: Globals;
  plugins: Plugins;
}
const config: IConfig = { plugins: plugins, globals: globals };

export default config;
