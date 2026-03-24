import dotenv from 'dotenv';
import type { 
  Environment, 
  ServerName,
  LogLevel,
  Hostname,
  Version, 
  Protocol, 
  PortNum 
} from '../lib/types.ts';

dotenv.config();

const APP_ENGINE: string = process.env.APP_ENGINE || "handlebars";
const APP_VERSION: Version = process.env.APP_VERSION || "1.0.0";
const APP_PROTOCOL: Protocol = process.env.APP_PROTOCOL || "http";
const APP_NAME: ServerName = process.env.APP_NAME || "Express Chat"
const APP_HOST: Hostname = process.env.APP_HOST || "127.0.0.1"
const APP_PORT: PortNum = process.env.APP_PORT || 4000;

const APP_NODE_ENV: Environment = process.env.APP_NODE_ENV || "development";
const APP_LOG_LEVEL: LogLevel = process.env.APP_LOG_LEVEL || "debug";

const APP_DEVELOPMENT = APP_NODE_ENV == 'development';
const APP_PRODUCTION = APP_NODE_ENV == 'production';
const APP_TESTING = APP_NODE_ENV == 'testing';
interface AppEnv {
  LOG_LEVEL: LogLevel;
  NODE_ENV: Environment;
  PROTOCOL: Protocol;
  VERSIONL: Version;
  NAME: ServerName;
  HOST: Hostname;
  PORT: PortNum;
  DEVELOPMENT: boolean;
  PRODUCTION: boolean;
  TESTING: boolean;
}

const APP: AppEnv = {
  LOG_LEVEL: APP_LOG_LEVEL,
  NODE_ENV: APP_NODE_ENV,
  PROTOCOL: APP_PROTOCOL,
  VERSION: APP_VERSION,
  NAME: APP_NAME,
  HOST: APP_HOST,
  PORT: APP_PORT,
  DEVELOPMENT: APP_DEVELOPMENT,
  PRODUCTION: APP_PRODUCTION, 
  TESTING: APP_TESTING
}




export { APP };
