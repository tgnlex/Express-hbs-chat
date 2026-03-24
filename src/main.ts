import information from './server/modules/info.ts'
import process from 'process';
import app from './server/app.ts';

const MESSAGE_OF_THE_DAY = 'Dont forget to eat your wheaties.'

/*** MAIN LOOP ***/
function main() {
  console.info('RUNNING MAIN SERVER LOOP');
  app.server.listen(app.port(), (err) => { 
    if (err) { 
      console.error(err);
      process.exit(1);
    }

    console.info(`[SERVER] listening on ${app.protocol()}://${app.host()}:${app.port()}`)
  });
  information(app, MESSAGE_OF_THE_DAY);
};

main();

export { main };
