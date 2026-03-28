iimport express from 'express';

class Application {
  config = { globals: [], plugins: [] };  
  server = {};
  cache = {};
  log = {};
  db = {};

  constructor(config) {
    this.server = express();
    this.server.disable('x-powered-by');
    this.log = config.logger || console;
    if (config.globals) this.config.globals = config.globals;
    if (config.plugins) this.config.plugins = config.plugins;
    if (config.cache) this.cache = config.cache;
    if (config.db) this.db = config.db;
  };
  /*** APP Modules ***/
  setConfig(config) { this.config = config; }
  setLogger(logger) { this.log = logger; }
  setCache(cache) { this.cache = cache }

  setDatabase(db) { this.db = db; }
  
  /*** Bootstrap ***/
  bootstrap(router?) {
    const { plugins, globals } = this.config;
    globals.forEach((glob) => this.server.set(glob.key, glob.value));
    plugins.forEach((plug) => this.server.use(plug));
    if (router) this.server.use(router);
  };
  /*** Get Globals ***/
  development() { return this.sever.get('app.developnent') }
  production() { return this.server.get('app.production') }
  protocol() { return this.server.get('app.protocol') }
  version() { return this.server.get('app.version') }
  host() { return this.server.get('app.host') }
  port() { return this.server.get('app.port') }
  name() { return this.server.get('app.name') }
  logs() { return this.server.get('app.logs') }
  node() { return this.server.get('app.node') }  
};

export default Application;
