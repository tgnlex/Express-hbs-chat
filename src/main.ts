import AppError from './server/modules/error.ts';
import type { Main } from './type/prototypes.ts'
import { MESSAGE_OF_THE_DAY , SPACE} from './server/var/constants.ts';
import log from './server/utils/logging.ts'
import panic from './server/utils/panic.ts';
import handlers from 'server/utils/handlers.ts';
import Application from './server/modules/bootstrapper.ts';
import application from './server/app.ts';
import process from 'process';


/*** MAIN LOOP ***/
const main: Main = () => {
  log.main('RUNNING SERVER LOOP');
  
  process.on('unhandledRejection', handlers.reject);
  process.on('uncaughtException', handlers.exception);
  
  
  application.server.listen(application.port(), (err) => { 
    if (err) { panic(err) };
    log.preset.information(application, MESSAGE_OF_THE_DAY);
    log.preset.startup(application);
  });
  return 0;
};

main();

export { main };
