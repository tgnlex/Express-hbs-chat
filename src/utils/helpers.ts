import type { Noop, Pass, Fail, Concat, Char } from '../type/prototypes.ts';
const noop = () => {};
const pass = () => { return true  };
const fail = () => { return false };

const fmtError = (error) => `[ERROR] ${error}` 
const fmtAddress = (prefix, host, port) => `${prefix}://${host}:${port}`

const concat = (base: string = '',  arr: string | string[] = []) => {
  arr.forEach((str) => { base = base + str });
  return base;
};

const panic = (err: object) => {
  console.error(fmtError(error));
  process.exit(1);
};

const char = (index, text) => {
  const str = text.charAt(index);
  if (typeof str === "string") { return str }
  else {return ""};
}

const fmt = { error: fmtError, address: fmtAddress };

export { panic, char, fmt, concat, noop, pass, fail }


