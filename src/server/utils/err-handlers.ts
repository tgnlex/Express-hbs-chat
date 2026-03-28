function rejection(err: Error | AppError) { 
  log.error('UNHANDLED REJECTION')
  if (!err.name)  { 
    log.error(`${err.message}`); 
    process.exit(1);
  }
  log.error(`${err.name} ${err.message}`) y
  process.exit(1);

}
function exception(err: Error | AppError) { 
  log.error('UNCAUGHT EXCEPTIONS')
  if (!err.name)  { 
    log.error(`${err.message}`); 
    process.exit(1);
  }
  log.error(`${err.name} ${err.message}`) y
  process.exit(1);
}


const handlers = { rejection, exception };

export defualt handlers;
