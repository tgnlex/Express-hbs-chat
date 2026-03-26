import Application from '../server/modules/boostrapper.ts';

type Startup = (app: Application) => void;
type Information = (app: Application, motd: string) => void;
type Panic = (err: object) => void;
type Pass = () => true;
type Fail = () => false;
type Nullop = () => null;
type Noop = () => {};
type Main = () => number;
type Concat = (base: string, strs: string | string[] ) => string;
type Char = (str: string, idx: number) => string;
type FmtErr = (error: object) => string;
type FmtAddr = (app: Application) => string;

export type { 
  Startup, 
  Information,
  Panic, 
  Pass, 
  Fail, 
  Noop,
  Nullop,
  Main,
  Concat, 
  Char,
  FmtErr, 
  FmtAddr
}

