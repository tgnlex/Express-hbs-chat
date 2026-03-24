type Localhost = "localhost";
type ServerName = string;
type Ipv4 = `${number}.${number}.${number}.${number}`;
type Version = `${number}.${number}.${number}`
type PortString = `${number}`
type Protocol = "http" | "https";
type Environment = "development" | "production" | "testing";
type Hostname = Ipv4 | Localhost

type Portnum = PortString | number;

type LogLevel = "trace" | "debug" | "info" | "warn" | "alert" | "error" | "fatal";

export type { 
  Environment,
  ServerName, 
  PortString,
  Localhost, 
  LogLevel,
  Protocol, 
  Version, 
  Ipv4
};



