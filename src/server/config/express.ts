import { APP } from './env.ts';
import express from 'express';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import {PATH} from '../../constants.ts';

type Globals = Array<{ key: string; value: string | number | boolean }>
type Plugins = Array<Function>

const plugins: Plugins = [
  express.urlencoded({ extended: true }),
  express.json(), 
  express.text(), 
  express.raw(),
  cookieParser(),
  helmet()
];

const globals: Globals = [
  /*** APP GLOBALS ***/
  { key: 'app.log_level', value: APP.LOG_LEVEL },
  { key: 'app.node_env', value: APP.NODE_ENV },
  { key: 'app.protocol', value: APP.PROTOCOL },
  { key: 'app.version', value: APP.VERSION },
  { key: 'app.name', value: APP.NAME},
  { key: 'app.host', value: APP.HOST},
  { key: 'app.port', value: APP.PORT},
  { key: 'app.engine', value: APP.ENGINE },
  /*** PATH GLOBALS ***/
  { key: 'path.upload', value: PATH.UPLOAD },
  { key: 'path.static', value: PATH.STATIC },
  { key: 'path.views', value: PATH.VIEWS },
  /*** EXPRESS GLOBALS ***/
  { key: 'view path', value: PATH.VIEWS }
];


const config =  { plugins, globals };

export default config;
