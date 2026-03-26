type IntOrStr = string | number;
type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Binary = 0 | 1;
type NumStr = `${number}`;

interface Int extends number {};

export type { 
  IntOrStr,
  Binary, 
  Digit,
  Int
}

