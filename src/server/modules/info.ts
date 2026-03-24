import { NEWLINE } from '../lib/constants.js';

function information(app, motd) {
  /*** INFO ***/
  app.log.info(NEWLINE); 
  app.log.info(`[MOTD]: ${motd}`);
  app.log.info(NEWLINE);
  app.log.info('#------------------------------------------#')
  app.log.info(`# [INFO] Application: ${app.name()}`);
  app.log.info(`# [INFO] Environment: ${app.env()}`);
  app.log.info(`# [INFO] App-Version: ${app.version()}`);
  app.log.info(`# [INFO] App-Protocol: ${app.protocol()}`);
  app.log.info(`# [INFO] App-Host: ${app.host()}`);
  app.log.info(`# [INFO] App-Port: ${app.port()}`);
  app.log.info('#------------------------------------------#')
  app.log.info(NEWLINE);
}
 
export default information;
