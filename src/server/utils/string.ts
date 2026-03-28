import Application from '../server/modules/bootstrapper.ts';
import type { Concat, Char, FmtErr, FmtAddr } from '../type/prototypes.ts';
import TAG from '../var/tag.ts';
import EMPTY from '../var/constants.ts';


interface IFmt {
  address: FmtAddress;
  error: FmtError;
};

const fmtError: FmtErr = (error: object) => `${TAG.ERROR} ${error}` 
const fmtAddress: FmtAddr = (app: Application) => `${app.protocol()}://${app.host()}:${app.port()}`

const concat: Concat = (base: string = '',  arr: string | string[] = []) => {
  arr.forEach((str) => { base = base + str });
  return base;
};


const char: Char = (index: number, text: string): string => {
  const str = text.charAt(index);
  if (typeof str === "string") { return str }
  else {return ""};
}


const fmt: IFmt = { error: fmtError, address: fmtAddress };

export { concat, char, fmt };



