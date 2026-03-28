import type { Tag } from '../types/string.ts';

interface ITag {
  SERVER: Tag;
  ERROR: Tag;
  MAIN: Tag;
  TASK: Tag;
  INFO: Tag;
  APP: Tag;
  LIB: Tag;
  DB: Tag;
} as const;


const TAG: ITag ={
  SERVER: '[SERVER]',
  ERROR: '[ERROR]',
  MAIN: '[MAIN]',
  TASK: '[TASK]',
  INFO: '[INFO]',
  APP: '[APP]',
  LIB: '[LIB]',
  DB: '[DB]',
} as const;


export default Tag;
