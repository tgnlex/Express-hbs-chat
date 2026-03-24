import { NEWLINE, SEPERATOR } from '../../constants.js';

function information(app, motd) {
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


}
 
export default information;
