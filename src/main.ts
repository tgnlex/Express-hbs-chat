import process from 'process';
import app from './server/app.ts';

const protocol = 'http';
const host = '127.0.0.1'; // localhost
const port = 4000;
/*** MAIN LOOP ***/
function main() {
  console.info('RUNNING MAIN SERVER LOOP');
  app.server.listen(port, (err) => { 
    if (err) { 
      console.error(err);
      process.exit(1);
    }
    console.info(`[SERVER] listening on ${protocol}://${host}:${port}`)
  });
};

main();

export { main };
