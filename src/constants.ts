import path from 'path';

interface IPath {
  SOURCE: string;
  UPLOAD: string;
  STATIC: string;
  VIEWS: string;
};

const PATH: IPath = {
  SOURCE: path.resolve('./'),
  UPLOAD: path.resolve('../upload'),
  STATIC: path.resolve('../static'),
  VIEWS: path.resolve('../views')
} as const;

const SEPERATOR: string = '#------------------------------------------#';
const EMPTY: string = '';
const SPACE: string = ' ';
const NEWLINE: string = '\n';


export { PATH, NEWLINE, SEPERATOR, EMPTY, SPACE };

