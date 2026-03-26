import Application from '../server/modules/bootstrapper.ts';
import { NEWLINE, SEPERATOR } from '../../constants.js';
import { fmt } from './string.ts'

function information(app: Application, motd: string) {
  /*** INFO ***/
  app.log.info(SEPERATOR);
  app.log.info(`# [INFO] Active Environment: ${app.node()}`);
  app.log.info(`# [INFO] App Name: ${app.name()}`);
  app.log.info(`# [INFO] App Version: ${app.version()}`);
  app.log.info(`# [INFO] App Protocol: ${app.protocol()}`);
  app.log.info(`# [INFO] App Host: ${app.host()}`);
  app.log.info(`# [INFO] App Port: ${app.port()}`);
  app.log.info(SEPERATOR)
  app.log.info(NEWLINE);
  app.log.info(`[MOTD]: ${motd}`);
  app.log.info(NEWLINE);
};


const startup: Startup = (app: Application): void => console.info(TAG.SERVER + SPACE + `listening on ${fmt.address(application)}`;

export { information, startup };
