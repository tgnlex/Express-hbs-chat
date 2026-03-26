import type { Main } from './type/prototypes.ts'
import { MESSAGE_OF_THE_DAY , SPACE} from './var/constants.ts';
import { information. startup } from './utils/logging.ts'
import { panic } from './utils/helpers.ts';
import Application from './server/modules/bootstrapper.ts';
import application from './server/app.ts';
import process from 'process';

import TAG from './var/tag';




/*** MAIN LOOP ***/
const main: Main = () => {
  console.info('RUNNING MAIN SERVER LOOP');
  application.server.listen(application.port(), (err) => { 
    if (err) { panic(err) };
  
    startup(application);
    information(application, MESSAGE_OF_THE_DAY);
  });
  return 0;
};

main();

export { main };
