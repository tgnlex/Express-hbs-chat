import type { IntOrStr } from './number.ts'

type Space = ' ';
type Empty = '';
type Newline = '\n';
type Localhost = "localhost" | "127.0.0.1";

type BEM = `${string}--${string}` | `${string}--${string}--${string}`;
type Tag = `[${string}]`;
type Uri = `/${string}`;

type Ipv4 = `${number}.${number}.${number}.${number}`;

type PortNum = `${number}${number}${number}${number}`;
type Seperator = `#${string}#`;
type Hashtag = `#${string}`;
type Hexidecimal = `#${IntOrStr}${IntOrStr}${IntOrStr}$${IntORStr}${IntOrStr}${IntOrStr}`;

type LogMessage = `${Tag} ${string | Empty}`;
type Port = PortNum | number;
type Hostname = Ipv4 | Localhost; 

export type { 
  Space, 
  Empty, 
  Newline, 
  Localhost, 
  BEM, 
  Tag, 
  Uri, 
  Ipv4, 
  PortNum, 
  Seperator, 
  Hashtag, 
  Hexidecimal, 
  LogMessage, 
  Port, 
  Hostname
}
