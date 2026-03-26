import type { Uri} from './types/string.ts';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname: Uri = path.dirname(fileURLToPath(import.meta.url));

enum Suffix {
  SOURCE = '../',
  UPLOAD = '../../upload',
  STATIC = '../../static',
  VIEWS: '../../views',
}

interface IPath {
  DIRNAME: Uri;
  SOURCE: Uri;
  UPLOAD: Uri;
  STATIC: Uri;
  VIEWS: Uri;
} as const;


const PATH: IPath = {
  DIRNAME: __dirname,
  SOURCE: path.resolve(path.join(__dirname, Suffix.SOURCE)),
  UPLOAD: path.resolve(path.join(__dirname, Suffix.UPLOAD)),
  STATIC: path.resolve(path.join(__dirname, Suffix.STATIC)),
  VIEWS: path.resolve(path.join(__dirname,  Suffix.VIEWS))
} as const;

export { dirname };
export default PATH;
